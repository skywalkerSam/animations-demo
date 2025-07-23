import * as THREE from "three";

const Sun = () => (
  <>
    {/* Indigo (#4B0082), Blue (#0000FF), Electric Green (#00FF00), Yellow (#FFFF00), Web Orange (#FFA500) and Red (#FF0000). */}
    <ambientLight intensity={10} color="#4B0082"></ambientLight>
    <ambientLight intensity={1} color="#0000FF"></ambientLight>
    <ambientLight intensity={1} color="#00FF00"></ambientLight>
    <ambientLight intensity={1} color="##FFFF00"></ambientLight>
    <ambientLight intensity={1} color="#FFA500"></ambientLight>
    <ambientLight intensity={1} color="#FF0000"></ambientLight>

    <directionalLight position={[0, 0, 5]} intensity={10} color={"#4B0082"}></directionalLight>
    <directionalLight position={[0, 0, -5]} intensity={10} color={"#4B0082"}></directionalLight>
  </>
);

export default Sun;
