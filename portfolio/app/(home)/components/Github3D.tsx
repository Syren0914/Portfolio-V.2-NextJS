"use client";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube({ position, count }: { position: [number, number, number]; count: number }) {
  // Normalize count to a reasonable height (max around 3-4 units)
  // Most days have 0-10 commits. A simplified log scale or linear cap works.
  const height = count === 0 ? 0.2 : Math.min(count * 0.5 + 0.5, 4);
  
  // Color calculation: 0 = dark, higher = brighter green
  // GitHub colors: #161b22 (0), #0e4429, #006d32, #26a641, #39d353
  // We'll interpolate physically
  const intensity = Math.min(0.2 + (count / 10), 1);
  const color = count === 0 ? "#1f2937" : `rgb(0, ${Math.floor(50 + (intensity * 200))}, 0)`;
  
  // Pivot the cube so it grows UP from y=0
  const yPos = height / 2;

  return (
    <mesh position={[position[0], yPos, position[2]]}>
      <boxGeometry args={[0.8, height, 0.8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function ContributionGraph({ data }: { data: any[] }) {
  const groupRef = useRef<any>(null);
  
  // We want a grid of 20 weeks (columns) x 7 days (rows) = 140 days
  const cols = 20;
  const rows = 7;
  
  // Flatten the data to just get the array of days
  // The API returns contributions grouped by year, or a flat list depending on endpoint.
  // using ?y=last gives: { contributions: [ { date, count, level }, ... ] }
  // We need the LAST 140 entries.
  
  const relevantData = data.slice(-(cols * rows));
  
  const cubes = [];

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Calculate index in the array
      // Columns are weeks, Rows are days (Sun-Sat)
      // We want to fill progressively. 
      // i=0 is the oldest week shown, i=19 is this week
      
      const dataIndex = (i * rows) + j;
      const dayData = relevantData[dataIndex];
      const count = dayData ? dayData.count : 0;
      
      cubes.push(
        <Cube 
          key={`${i}-${j}`} 
          position={[i - cols / 2, 0, j - rows / 2]} 
          count={count}
        />
      );
    }
  }

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes}
    </group>
  );
}

export default function Github3D() {
    const [data, setData] = useState<any[]>([]);
    
    useEffect(() => {
        async function fetchGithub() {
            try {
                const res = await fetch('/api/github');
                const json = await res.json();
                // json.contributions is array of days for 'last' year
                if (json && json.contributions) {
                    setData(json.contributions);
                }
            } catch (e) {
                console.error("Github fetch failed", e);
            }
        }
        fetchGithub();
    }, []);

  return (
    <div className="w-full h-[400px] bg-black/50 rounded-xl overflow-hidden border border-white/10 relative group">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-xl font-bold text-gray-200">Github Activity</h3>
        <p className="text-sm text-gray-400">@syren0914 (Live Data)</p>
      </div>
      
      <Canvas camera={{ position: [15, 12, 15], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        {data.length > 0 && <ContributionGraph data={data} />}
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
