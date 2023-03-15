import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Col,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import L1 from "./lessons/L1";
import L2 from "./lessons/L2";
import L3 from "./lessons/L3";
import L4 from "./lessons/L4";

const Curriculum = () => {
  const [lesson, setLesson] = React.useState(1);
  const Item = ({ children, lessonId }) => {
    return (
      <ListGroupItem
        className="listItem border-0"
        action
        tag="button"
        onClick={() => {
          if (lessonId) {
            setLesson(lessonId);
            console.log(lesson);
          }
        }}
      >
        {children}
      </ListGroupItem>
    );
  };
  return (
    <React.StrictMode>
      <section className="bg-gray-light" style={{ overflowX: "hidden" }}>
        <Row>
          <Col lg="2">
            <ListGroup className="my-2 ms-2" flush>
              <Item>
                <span className="subtitle">Chapter 1</span>
                <ListGroup>
                  <Item lessonId={1}>Lesson 1.1</Item>
                  <Item lessonId={2}>Lesson 1.2</Item>
                  <Item lessonId={3}>Lesson 1.3</Item>
                  <Item lessonId={4}>Lesson 1.4</Item>
                </ListGroup>
              </Item>
            </ListGroup>
          </Col>
          <Col>
            {lesson === 1 && <L1 />}
            {lesson === 2 && <L2 />}
            {lesson === 3 && <L3 />}
            {lesson === 4 && <L4 />}
          </Col>
        </Row>
      </section>
    </React.StrictMode>
  );
};
export default Curriculum;
