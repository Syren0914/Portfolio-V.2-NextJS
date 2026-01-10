import { kv } from '@vercel/kv';
import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const INITIAL_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getRefreshToken = async (): Promise<string> => {
    try {
        const storedToken = await kv.get<string>('spotify_refresh_token');
        return storedToken || INITIAL_REFRESH_TOKEN || '';
    } catch (error) {
        // Fallback to env var if KV is not available (local dev)
        console.log('KV not available, using env refresh token');
        return INITIAL_REFRESH_TOKEN || '';
    }
};

const getAccessToken = async () => {
    const refresh_token = await getRefreshToken();

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    const data = await response.json();

    if (data.error) {
        console.error("Error fetching access token:", data);
        return data;
    }

    // Handle refresh token rotation - save new token if returned
    if (data.refresh_token) {
        try {
            await kv.set('spotify_refresh_token', data.refresh_token);
            console.log('New refresh token saved to KV');
        } catch (error) {
            console.log('Could not save refresh token to KV:', error);
        }
    }

    return data;
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        cache: 'no-store',
    });
};
