"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Monkey } from "./Monkey";
import MonkeyLights from "./MonkeyLights";
import { Suspense } from "react";

export default function Monkey3D() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [-10, -10, 10], fov: 30 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.9} color=" #ffffff" /> {/** #1a1a40 */}
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <MonkeyLights />
        
        <group
          scale={isMobile ? 0.7 : 1.5}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Monkey />
        </group>
      </Suspense>
    </Canvas>
  );
}
