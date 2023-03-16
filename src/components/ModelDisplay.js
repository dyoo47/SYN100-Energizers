import { Card, CardTitle, CardBody, Row, Col } from "reactstrap";
import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

function Model(props) {
  const { scene } = useGLTF("models/untitled.glb");
  return <primitive object={scene} />;
}

const ModelDisplay = ({ children, title, model }) => {
  function Scene() {
    const names = ["Coal", "Nuclear", "Solar", "Wind"];
    const materials = useLoader(MTLLoader, `models/${names[model]}.mtl`);
    const obj = useLoader(OBJLoader, `models/${names[model]}.obj`, (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    })
      .rotateX(1.57)
      .translateX(model === 2 ? -50 : 0)
      .translateY(model === 2 ? -20 : -200)
      .translateZ(model === 2 ? 0 : 200);
    return <primitive object={obj} />;
  }
  return (
    <Row>
      <Col lg="6" className="m-auto">
        <Card className="bg-gray-light border-0">
          <Canvas
            style={{ height: "400px", width: "100%", overflow: "hidden" }}
            pixelRatio={[1, 2]}
            camera={{
              position: [-20, 50, 0],
              fov: 50,
            }}
          >
            <ambientLight intensity={0.2} />
            <directionalLight
              position={[-200, 150, 0]}
              color="white"
              intensity={5}
            />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Card>
        <div>
          <span className="fparagraph">
            <span className="fst-italic">{title}</span> {children}
          </span>
        </div>
      </Col>
    </Row>
  );
};

export default ModelDisplay;
