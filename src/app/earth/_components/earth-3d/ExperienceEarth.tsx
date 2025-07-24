"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Sun from "./Sun";
import { Suspense } from "react";
// import Particles from "~/components/Particles";
// import { Earth } from "./Earth";
import { EarthHiRes } from "./EarthHiRes";

export default function ExperienceEarth() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 30 }}
      style={{
        // position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        // zIndex: -1, // Optional: puts canvas behind other content
      }}
    >
      <Sun />
      {/* <Particles></Particles> */}

      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        // enablePan={false} // Prevents panning of the scene
        // enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={30} // Maximum distance for zooming out
        minDistance={10} // Minimum distance for zooming in
        // minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        // maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 1.9 : 2.9}
          position={[0, -3.5, 0]}
          // rotation={[0, -Math.PI / 4, 0]}
        >
          {/* <Earth /> */}
          <EarthHiRes></EarthHiRes>
        </group>
      </Suspense>
    </Canvas>
  );
}
