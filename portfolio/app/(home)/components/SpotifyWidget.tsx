"use client";
import React, { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SpotifyWidget() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: 'no-store' });
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
        setLoading(false);
      }
    };

    fetchData();
    // Poll every 5 seconds
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null; // Or a skeleton

  const isPlaying = data?.isPlaying;
  const songTitle = data?.title || "Not Playing";
  const artist = data?.artist || "Spotify";
  const albumImage = data?.albumImageUrl;
  const songUrl = data?.songUrl || "#";

  return (
    <Link 
      href={songUrl} 
      target="_blank"
      className="fixed bottom-5 left-5 z-50 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-4 w-[280px] sm:w-[320px] shadow-2xl transition-all hover:scale-105 hover:bg-black/90"
    >
      {/* Album Art */}
      <div className="relative w-14 h-14 rounded-md overflow-hidden bg-gradient-to-br from-green-500 to-black flex-shrink-0">
        {albumImage ? (
             <Image 
                src={albumImage} 
                alt="Album Art" 
                fill 
                className="object-cover"
             />
        ) : (
            <SiSpotify className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-green-400 flex items-center gap-1">
            <span className={`w-1.5 h-1.5 rounded-full bg-green-400 ${isPlaying ? 'animate-pulse' : ''}`} />
            {isPlaying ? "Now Playing" : "Offline"}
          </span>
        </div>
        
        {/* Scrolling Text Effect */}
        <div className="overflow-hidden relative h-5">
           <motion.div 
             className="whitespace-nowrap font-medium text-gray-200 text-sm absolute"
             animate={{ x: isPlaying ? ["100%", "-100%"] : 0 }}
             transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
           >
             {songTitle} - {artist}
           </motion.div>
        </div>
        <p className="text-xs text-gray-500 truncate">{artist}</p>
      </div>

      {/* Animated Equalizer */}
      {isPlaying && (
          <div className="flex gap-1 items-end h-6">
            {[1, 2, 3, 4].map((bar) => (
              <motion.div
                key={bar}
                className="w-1 bg-green-500 rounded-t-sm"
                animate={{
                  height: ["20%", "100%", "50%", "80%", "20%"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: bar * 0.1,
                }}
              />
            ))}
          </div>
      )}
    </Link>
  );
}
