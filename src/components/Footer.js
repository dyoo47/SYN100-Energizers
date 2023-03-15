import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/", router: true },
        { label: "About", href: "/about", router: true },
        { label: "Curriculum", href: "/curriculum", router: true },
      ],
    },
    {
      title: "Other ",
      links: [
        {
          label: "What is Synthesis?",
          href: "https://seventh.ucsd.edu/synthesis-program/index.html",
          router: false,
        },
        {
          label: "World-Nuclear.org",
          href: "https://www.world-nuclear.org/information-library/nuclear-fuel-cycle/nuclear-wastes/radioactive-waste-management.aspx",
          router: false,
        },
        {
          label: "NRC.gov",
          href: "https://www.nrc.gov/waste.html",
          router: false,
        },
      ],
    },
  ];
  return (
    <>
      <section className="landingSection">
        <Container className="landingContainer">
          <Row>
            {data.map((entry) => (
              <Col md="6">
                <div>
                  <span className="subtitle text-muted">{entry.title}</span>
                </div>
                {entry.links.map((link) => (
                  <>
                    <br />
                    {link.router ? (
                      <Link to={link.href}>
                        <span className="text-muted">{link.label}</span>
                      </Link>
                    ) : (
                      <a href={link.href} className="text-muted">
                        {link.label}
                      </a>
                    )}
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
