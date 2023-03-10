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

const Item = (props) => {
  return (
    <ListGroupItem className="listItem border-0" action href="#" tag="a">
      {props.children}
    </ListGroupItem>
  );
};

const Curriculum = () => {
  return (
    <section className="bg-gray-light">
      <Row>
        <Col lg="2">
          <ListGroup className="my-2 ms-2" flush>
            <Item>
              <span className="subtitle">Chapter 1</span>
              <ListGroup>
                <Item>Lesson 1.1</Item>
                <Item>Lesson 1.2</Item>
                <Item>Lesson 1.3</Item>
              </ListGroup>
            </Item>
            <Item>
              <span className="subtitle">Chapter 2</span>
            </Item>
            <Item>
              <span className="subtitle">Chapter 3</span>
            </Item>
          </ListGroup>
        </Col>
        <Col>
          <Card className="shadow-sm me-2 my-2 border-0">
            <CardBody>
              <CardTitle>
                <span className="subtitle">Chapter 1</span>
              </CardTitle>
              <hr />
              <Container>
                <span className="title">Lesson 1.1: Lesson Title</span>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
  );
};
export default Curriculum;
