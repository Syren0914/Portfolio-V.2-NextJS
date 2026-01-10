const https = require('https');
const readline = require('readline');
const querystring = require('querystring');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n--- Spotify Refresh Token Generator ---\n");

rl.question('Enter Client ID: ', (clientId) => {
  rl.question('Enter Client Secret: ', (clientSecret) => {
    
    // Updated to use your Cloudflare tunnel
    const redirectUri = 'https://hobbies-boss-responsibilities-felt.trycloudflare.com';
    const scopes = 'user-read-currently-playing user-read-playback-state';
    
    const authUrl = 'https://accounts.spotify.com/authorize?' + 
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scopes,
        redirect_uri: redirectUri,
      });

    console.log(`\n--------------------------------------------------------------`);
    console.log(`STEP 1: Go to your Spotify Dashboard -> Edit Settings`);
    console.log(`STEP 2: Add "${redirectUri}" to Redirect URIs and Click Save.`);
    console.log(`STEP 3: Open this URL in your browser:\n`);
    console.log(authUrl);
    console.log(`\nSTEP 4: After logging in, you will be redirected to localhost.`);
    console.log(`        (If it says "Site can't be reached", that's fine!)`);
    console.log(`STEP 5: Copy the "code" part from the address bar (everything after code=)`);
    console.log(`--------------------------------------------------------------\n`);

    rl.question('Paste the code here: ', (code) => {
      
      const postData = querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      });

      const options = {
        hostname: 'accounts.spotify.com',
        path: '/api/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
      };

      const req = https.request(options, (res) => {
        let responseData = '';
        res.on('data', (chunk) => responseData += chunk);
        res.on('end', () => {
            try {
                const json = JSON.parse(responseData);
                if (json.refresh_token) {
                    console.log('\n✅ SUCCESS! Token received.');
                    
                    const fs = require('fs');
                    fs.writeFileSync('spotify-token.txt', json.refresh_token);
                    
                    console.log('I have saved your Refresh Token to a new file named "spotify-token.txt".');
                    console.log('Please open that file, copy the ENTIRE content, and paste it into .env.local');
                } else {
                    console.log('\n❌ Error fetching token. Response:\n', json);
                }
            } catch (err) {
                console.log('Error parsing response:', responseData);
            }
            rl.close();
        });
      });

      req.on('error', (e) => {
        console.error('Request error:', e);
        rl.close();
      });

      req.write(postData);
      req.end();
    });
  });
});
