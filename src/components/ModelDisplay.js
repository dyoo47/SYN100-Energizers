import { Card, CardTitle, CardBody, Row, Col } from "reactstrap";
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

function Scene() {
  const materials = useLoader(MTLLoader, "models/iphone.mtl");
  const obj = useLoader(OBJLoader, "models/iphone.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={obj} />;
}

const ModelDisplay = ({ children, title }) => {
  return (
    <Row>
      <Col lg="6" className="m-auto">
        <Card className="bg-gray-light border-0">
          <Canvas
            style={{ height: "400px", width: "100%", overflow: "hidden" }}
            pixelRatio={[1, 2]}
            camera={{ position: [-10, 15, 15], fov: 50 }}
          >
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <Model />
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
