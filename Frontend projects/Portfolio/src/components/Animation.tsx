import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./Model";

const Animation = () => {
  return (
    <div className="absolute top-0 h-[500px] w-full z-10">
      <Canvas camera={{ fov: 60, position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <Model position={[0, -2, 0]} />
          <OrbitControls autoRotate autoRotateSpeed={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Animation;
