import React, { Suspense } from "react";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  Text,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Loader from "../Loader";

const Ball = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.05}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#3d3d3d"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            map={decal}
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <Text
          position={[0, -3, 0]} // Adjust position as needed
          fontSize={1.05} // Adjust fontSize as needed
          color="white" // Adjust color as needed
        >
          {text}
        </Text>
      </Float>
    </>
  );
};

function BallCanvas({ icon, text }: { icon: string; text: string }) {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <Ball imgUrl={icon} text={text} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default BallCanvas;
