import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = (props) => {
  const { nodes, materials } = useGLTF("/dog.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-3.4, 0, -2.95]}
        scale={[7.05, 1, 7.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main.geometry}
        material={materials.palette}
        position={[3.69, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/dog.glb");

export default Model;
