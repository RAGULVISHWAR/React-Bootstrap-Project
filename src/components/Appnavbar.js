import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Appcart from "./Appcart";

const Appnavbar = () => {
  return (
    <Navbar expand="lg" className="bg-primary  sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <h2>
            <span>
              <i class="bi bi-bag-heart"></i> Textile
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex justify-content-between">
            <Nav.Link href="#home">
              <h className="text fw-bold">Home</h>
            </Nav.Link>
            <Nav.Link href="#menu">
              <h className="text fw-bold">Menu</h>
            </Nav.Link>
            <Nav.Link href="#contacts">
              <h className="text fw-bold">Contacts</h>
            </Nav.Link>
          </Nav>
          <Appcart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appnavbar;
