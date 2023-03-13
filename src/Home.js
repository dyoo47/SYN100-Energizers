import React from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";

const Home = () => {
  return (
    <>
      <section className="landingHeader">
        <Container className="landingContainer">
          <span className="subtitle">subtitle</span>
          <h1 className="display">Title</h1>
          <Button color="primary">discover with us</Button>
        </Container>
      </section>
      <section className="landingSection bg-white">
        <Container className="landingContainer">
          <Row>
            <Col>
              <div className="mb-2">
                <span className="subtitle">subtitle</span>
              </div>
              <span className="paragraph">
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
