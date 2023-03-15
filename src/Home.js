import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  faPenNib,
  faLightbulb,
  faSolarPanel,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = ({ icon, big }) => {
  const margin = big ? "" : "mt-4";
  return (
    <div className={`d-flex justify-content-center mb-4 ${margin}`}>
      <Card
        style={
          big
            ? {
                width: "150px",
                height: "150px",
              }
            : {}
        }
        className="badgeCard border-0 m-2 align-self-center"
      >
        <CardBody className="d-flex justify-content-center">
          <FontAwesomeIcon
            icon={icon}
            className="align-self-center"
            size="2x"
          />
        </CardBody>
      </Card>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(images/bluemap.jpg)" }}
        className="landingHeader"
      >
        <Container className="landingContainer">
          <span className="subtitle">Synthesis 100</span>
          <h1 className="display mb-3">Energizers</h1>
          <Button color="primary">view curriculum</Button>
        </Container>
      </section>
      <section className="landingSection">
        <Container className="landingContainer">
          <Row>
            <span className="subtitle mb-4">Our Topic</span>
          </Row>
          <Row className="text-center">
            <Col lg="4">
              <Badge icon={faAtom} />
              <span>
                “What’s happened to me?” he thought. It wasn’t a dream. His
                room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table—Samsa was a
                travelling salesman—and above it there hung a picture
              </span>
            </Col>
            <Col lg="4">
              <Badge icon={faLightbulb} big />
              <span className="fparagraph">
                “What’s happened to me?” he thought. It wasn’t a dream. His
                room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table—Samsa was a
                travelling salesman—and above it there hung a picture
              </span>
            </Col>
            <Col lg="4">
              <Badge icon={faSolarPanel} />
              <span>
                “What’s happened to me?” he thought. It wasn’t a dream. His
                room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table—Samsa was a
                travelling salesman—and above it there hung a picture
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="landingSection bg-white">
        <Container className="landingContainer">
          <Row>
            <Col>
              <div className="mb-2">
                <span className="subtitle">subtitle</span>
              </div>
              <span className="fparagraph">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly able to cover
                it and seemed ready to slide off any moment. His many legs,
                pitifully thin compared with the size of the rest of him, waved
                about helplessly as he looked.
              </span>
            </Col>
            <Col>
              <Card
                style={{
                  height: "500px",
                }}
              ></Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
