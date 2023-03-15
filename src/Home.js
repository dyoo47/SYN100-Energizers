import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import {
  faPenNib,
  faLightbulb,
  faSolarPanel,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBadge = ({ icon, big }) => {
  const margin = big ? "" : "";
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
        className="badgeCard border-0 m-2 align-self-center bg-gray"
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
          <Link to="/curriculum">
            <Button color="primary">view curriculum</Button>
          </Link>
        </Container>
      </section>
      <section className="landingSection bg-white">
        <Container className="landingContainer">
          <Row className="mb-4 text-center">
            <Col>
              <span className="subtitle">In this course you will find...</span>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="4">
              <CardBadge icon={faAtom} />
              <div className="mb-2">
                <span className="subtitle">Modern Energy Sources</span>
              </div>
              <span className="fparagraph">
                Your students will understand how modern energy sources impact
                the environment and society, as well as the difference between
                modern and traditional sources.
              </span>
            </Col>
            <Col lg="4">
              <CardBadge icon={faLightbulb} />
              <div className="mb-2">
                <span className="subtitle">Trusted Statistics</span>
              </div>
              <span className="fparagraph">
                We provide interesting facts and lessons corroborated by
                reliable studies and sources. Every source can be found in our
                About page.
              </span>
            </Col>
            <Col lg="4">
              <CardBadge icon={faSolarPanel} />
              <div className="mb-2">
                <span className="subtitle">Interactive Components</span>
              </div>
              <span className="fparagraph">
                Our web framework combines the best of traditional teaching and
                modern technology to provide specific and interactible figures
                for your students to interact with.
              </span>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="landingSection bg-white">
        <Container className="landingContainer">
          <Row>
            <Col>
              <div className="mb-2">
                <span className="subtitle">About this website</span>
              </div>
              <span className="fparagraph">
                Hello! We are the Energizers, a group of students studying at UC
                San Diego that are passionate about helping to teaching others
                about potential solutions to the climate crisis. This is why we
                have designed this website as a project for the Synthesis
                program at our school. Our goal is to help spread awareness of
                the severity of pollution and climate change in the energy
                sector, and to educate people on the pros and cons of each
                popular type of energy in use today, so people can make informed
                and educated decisions about their potential use in the future.
                We aim for this information/curriculum to be used by teachers to
                allow for them to more easily teach their students about the
                climate crisis using factual evidence from trusted sources, but
                not requiring as much time as it might take to individually
                analyze each of the sources. We also hope that this information
                that we are sharing is able to inspire others to become
                interested in climate change so that we are able to reduce its
                disasterous affects on our planet, and ultimately help those
                that are being dispropotionately affected by the effects climate
                change has had and continues to have on our planet!
              </span>
            </Col>
            <Col>
              <Card
                className="border-0"
                style={{
                  backgroundImage: "url(images/greenmap.jpg)",
                  height: "500px",
                }}
              ></Card>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Home;
