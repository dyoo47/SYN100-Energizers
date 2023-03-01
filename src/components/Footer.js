import React from "react";
import { Card, Col, Container, Row } from "reactstrap";

const Footer = () => {
  const data = [
    {
      title: "column 1",
      links: ["link 1", "link 2", "link 3"],
    },
    {
      title: "column 2",
      links: ["link 1", "link 2", "link 3"],
    },
    {
      title: "column 3",
      links: ["link 1", "link 2", "link 3"],
    },
    {
      title: "column 4",
      links: ["link 1", "link 2", "link 3"],
    },
  ];
  return (
    <>
      <section className="landingSection">
        <Container className="landingContainer">
          <Row>
            {data.map((entry) => (
              <Col md="3">
                <div>
                  <span className="subtitle text-black">{entry.title}</span>
                </div>
                {entry.links.map((link) => (
                  <>
                    <br />
                    <span className="text-muted">{link}</span>
                  </>
                ))}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="py-4 text-muted bg-dark">
        <Container className="landingContainer">
          <span>© 2023, Energizers Group.</span>
        </Container>
      </section>
    </>
  );
};
export default Footer;
