import React from "react";
import { Container, Card, CardBody, CardTitle } from "reactstrap";

const LessonWrapper = ({ chapter, lesson, children }) => {
  return (
    <Card className="shadow-sm me-2 my-2 pb-5 border-0">
      <CardBody>
        <CardTitle>
          <span className="subtitle">{chapter}</span>
        </CardTitle>
        <hr />
        <Container>
          <div className="mt-4">
            <span className="title">{lesson}</span>
          </div>
          <br />
          {children}
        </Container>
      </CardBody>
    </Card>
  );
};
export default LessonWrapper;
