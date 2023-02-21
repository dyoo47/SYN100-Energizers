import React from "react";
import { Container } from "reactstrap";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const ViewSample = () => {
  const modelPath =
    "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";
  return (
    <Container>
      <GLTFModel src={modelPath}>
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        <DirectionLight
          color={0xff00ff}
          position={{ x: -100, y: 200, z: -100 }}
        />
      </GLTFModel>
    </Container>
  );
};

export default ViewSample;
