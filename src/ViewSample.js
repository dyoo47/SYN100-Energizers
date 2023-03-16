import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Container } from "reactstrap";

function Model(props) {
  const { scene } = useGLTF("models/untitled.glb");
  return <primitive object={scene} />;
}

const ViewSample = () => {
  return (
    <Canvas
      style={{ height: "100%", width: "100%" }}
      pixelRatio={[1, 2]}
      camera={{ position: [-10, 15, 15], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ViewSample;
