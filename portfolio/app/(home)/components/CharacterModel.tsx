"use client";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "@react-three/drei";

function Model() {
  const obj = useLoader(OBJLoader, "/myCharacter.obj");
  return <primitive object={obj} scale={2.5} position={[0, -2.5, 0]} />;
}

export default function CharacterModel() {
  return (
    <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
