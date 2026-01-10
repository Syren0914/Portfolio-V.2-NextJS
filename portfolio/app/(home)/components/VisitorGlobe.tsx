"use client";
import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

// Convert Lat/Lon to 3D position
const calcPosFromLatLonRad = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return [x, y, z] as [number, number, number];
};

function Globe({ userLocation }: { userLocation: { lat: number; lon: number; city: string } | null }) {
  const globeRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (globeRef.current) {
        // Slow auto-rotation
      globeRef.current.rotation.y += 0.001;
    }
  });

  const markerPos = userLocation 
    ? calcPosFromLatLonRad(userLocation.lat, userLocation.lon, 2.5) 
    : null;

  return (
    <group ref={globeRef}>
      {/* Cloud/Atmosphere Glow - Brighter */}
      <mesh scale={[2.6, 2.6, 2.6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>

      {/* Main Wireframe Sphere - Brighter */}
      <Sphere args={[2.5, 64, 64]}>
         <meshBasicMaterial color="#4ade80" wireframe transparent opacity={0.3} />
      </Sphere>
      
      {/* Solid inner core - Darker to contrast wireframe */}
      <Sphere args={[2.49, 64, 64]}>
          <meshBasicMaterial color="#020617" />
      </Sphere>

      {/* Sci-Fi Rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
         <torusGeometry args={[3, 0.02, 16, 100]} />
         <meshBasicMaterial color="#4ade80" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
         <torusGeometry args={[3.5, 0.02, 16, 100]} />
         <meshBasicMaterial color="#22d3ee" transparent opacity={0.2} />
      </mesh>

      {/* Random "Stars" or "Satellites" revolving */}
      <points>
         <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={150}
              array={new Float32Array(450).map(() => (Math.random() - 0.5) * 8)}
              itemSize={3}
            />
         </bufferGeometry>
         <pointsMaterial size={0.05} color="#4ade80" transparent opacity={0.4} />
      </points>
      
      {/* User Marker */}
      {markerPos && (
          <group position={markerPos}>
              {/* Glowing animated ring */}
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <ringGeometry args={[0.1, 0.15, 32]} />
                  <meshBasicMaterial color="#4ade80" side={THREE.DoubleSide} transparent opacity={0.8} />
              </mesh>
              
              {/* Vertical pin line */}
              <mesh position={[0, 0.4, 0]}>
                 <cylinderGeometry args={[0.02, 0.02, 0.8]} />
                 <meshBasicMaterial color="#4ade80" transparent opacity={0.6} />
              </mesh>

              {/* Top dot */}
              <mesh position={[0, 0.8, 0]}>
                  <sphereGeometry args={[0.08, 16, 16]} />
                  <meshStandardMaterial color="#fff" emissive="#4ade80" emissiveIntensity={2} />
              </mesh>
             
              {/* Label */}
              <Html position={[0, 1.2, 0]} center>
                  <div className="bg-black/90 backdrop-blur-sm text-green-400 text-xs font-mono px-3 py-1.5 rounded-full border border-green-500/50 shadow-[0_0_15px_rgba(74,222,128,0.4)] flex items-center gap-2">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                      {userLocation?.city || "Locating..."}
                  </div>
              </Html>
          </group>
      )}
    </group>
  );
}

export default function VisitorGlobe() {
  const [location, setLocation] = useState<{ lat: number; lon: number; city: string } | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.latitude && data.longitude) {
            setLocation({
                lat: data.latitude,
                lon: data.longitude,
                city: data.city
            });
        }
      })
      .catch(err => console.error("Location fetch failed", err));
  }, []);

  return (
    <div className="w-full h-[400px] bg-black/50 rounded-xl overflow-hidden border border-white/10 relative group">
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <h3 className="text-xl font-bold text-gray-200">Visitor Location</h3>
            <p className="text-sm text-gray-400">Live Connection</p>
        </div>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Globe userLocation={location} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI - Math.PI / 4} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
