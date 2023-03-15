import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

const Definition = ({ title, children }) => {
  return (
    <Card className="my-4 bg-gray-light border-0">
      <CardBody>
        <CardTitle>
          <span className="subtitle">
            Definition: <span className="font-italic">{title}</span>
          </span>
        </CardTitle>
        <span>{children}</span>
      </CardBody>
    </Card>
  );
};

export default Definition;
