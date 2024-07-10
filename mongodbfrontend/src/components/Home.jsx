import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <Container>
        <Navbar.Brand style={{ textDecoration: "none", color: "blue" }}>
          User Information
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto">
            <Nav.Item className="mr-3">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/user">
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
