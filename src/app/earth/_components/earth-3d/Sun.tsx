// import * as THREE from "three";

const Sun = () => (
  <>
    {/* 
    Indigo (#4B0082), Blue (#0000FF), Electric Green (#00FF00), Yellow (#FFFF00), Web Orange (#FFA500) and Red (#FF0000) 
    */}

    {/* Soft ambient light for the space environment */}
    <ambientLight intensity={1} color="#b8c6db" />
    <ambientLight intensity={0.2} color="#ffffff" />

    {/* Main sunlight - warm white with slight blue tint to simulate atmospheric scattering */}
    <directionalLight
      position={[10, 5, 5]}
      intensity={4}
      // color="#f0f8ff" // Alice blue - subtle blue tint
      // color="#4B0082"
      color="#0000FF"
      // castShadow
      // shadow-mapSize-width={2048}
      // shadow-mapSize-height={2048}
      // shadow-camera-far={50}
      // shadow-camera-left={-10}
      // shadow-camera-right={10}
      // shadow-camera-top={10}
      // shadow-camera-bottom={-10}
    />

    {/* Atmospheric scattering simulation - blue light from multiple angles */}
    <directionalLight
      position={[8, 3, 7]}
      intensity={0.3}
      color="#87ceeb" // Sky blue
    />

    {/* Fill light to simulate Earth's atmospheric glow */}
    <directionalLight
      position={[-5, 2, -3]}
      intensity={0.2}
      color="#add8e6" // Light blue
    />

    {/* Additional rim lighting */}
      <directionalLight
        position={[-8, -3, -3]}
        intensity={0.2}
        // color="#00FF00"
        color="#b8c6db"
      />
  </>
);

export default Sun;
