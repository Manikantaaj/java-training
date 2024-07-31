import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarouselsPage from "./CarouselsPage";
import FooterPage from "./FooterPage";
import CardPage from "./CardPage";
import SavingsIcon from "@mui/icons-material/Savings";

const HomePage = () => {
  return (
    <div>
      <Navbar className="home-bg shadow">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>
              {/* <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7kn53--9wZ572zLOdWhFqH9lT3zYILOuIg&s"
                alt="Bank Logo"
                style={{
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              /> */}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/PostBankDetails" className="text-bg">
                  Add Bank Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/GetBankDetails" className="text-bg">
                  Get Bank Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/UpdateBankDetails" className="text-bg">
                  Update Bank Details
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/DeleteBankDetails" className="text-bg">
                  Delete Bank Details
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CarouselsPage />
      <CardPage />
      <FooterPage />
    </div>
  );
};

export default HomePage;
