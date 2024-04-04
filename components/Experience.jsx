import { OrbitControls } from "@react-three/drei";
import {PersonalAvatar} from "./PersonalAvatar"
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <PersonalAvatar />
      </group>
      <ambientLight intensity={1}/>
    </>
  );
};