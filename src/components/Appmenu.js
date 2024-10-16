import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import AddCartConfirm from "./AddCartConfirm";
const Appmenu = () => {
  const [menu] = useState([1, 2, 3, 4, 6]);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <section id="menu">
        <Container>
          <div className="text-center">
            <h2 className="text mt-5 mb-3"> Menu</h2>
          </div>
          <Row className="d-flex justify-content-evenly">
            {menu.map((i) => {
              return (
                <Col md={6} lg={4} className="mb-3" key={i}>
                  <Card className="m-3">
                    <Card.Img
                      variant="top"
                      src={require("../assets/download.jpeg")}
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          onClick={() => setModalShow(true)}
                        >
                          Add to Bag
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <AddCartConfirm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Appmenu;
