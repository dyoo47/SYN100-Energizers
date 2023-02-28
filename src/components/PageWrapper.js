import React from "react";
import { Container } from "reactstrap";

const PageWrapper = (props) => {
  return (
    <div className="landingSection">
      <Container>{props.children}</Container>
    </div>
  );
};
export default PageWrapper;
