import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div className="footer-bg my-3">
      <footer className="border shadow">
        <Container className="d-flex py-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7kn53--9wZ572zLOdWhFqH9lT3zYILOuIg&s"
            alt="Bank Logo"
            style={{ height: "50px" }}
          />
          <Container className="col-5 d-flex py-3">
            <ul className="list-unstyled">
              <h5>Content</h5>
              <li>
                <Link to={"/PostBankDetails"} className="footer-link">
                  Add Bank Details
                </Link>
              </li>
              <li>
                <Link to={"/UpdateBankDetails"} className="footer-link">
                  Update Bank Details
                </Link>
              </li>
              <li>
                <Link to={"/GetBankDetails"} className="footer-link">
                  Get Bank Details
                </Link>
              </li>
              <li>
                <Link to={"/DeleteBankDetails"} className="footer-link">
                  Delete Bank Details
                </Link>
              </li>
            </ul>
            <ul>
              <h5>Address</h5>
              <p>
                Hottgali Hunsur road, <br /> Mysuru-560021
              </p>
            </ul>
          </Container>
        </Container>
        <Container className="text-center">
          <small>
            &copy; {new Date().getFullYear()} BankingDetails. All rights
            reserved.
          </small>
        </Container>
      </footer>
    </div>
  );
};

export default FooterPage;
