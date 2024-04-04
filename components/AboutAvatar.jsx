import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

function AboutAvatar() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default AboutAvatar;