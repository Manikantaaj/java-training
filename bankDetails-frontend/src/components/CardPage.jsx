import React from "react";
import { Button, Card, CardBody, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPage = () => {
  return (
    <div>
      <Container className="col-8 d-flex">
        <Card style={{ width: "20rem" }} className="card-bg">
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqIqfl4Qbzkemj-UF4NdTNTswXalVvSEYlQ&s"
          />
          <CardBody>
            <Card.Title>Add Bank Details</Card.Title>
            <Card.Text>
              Add complete details about your bank for our reference
            </Card.Text>
            <Link to={"/PostBankDetails"}>
              <Button type="submit" className="button-bg">
                Add Bank Details
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Container className="col-4">
          <Card style={{ width: "20rem" }} className="card-bg">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJPnXZRLTkAUB9l71H9xkaAfthQggANkGu57dScrLyOo-DTsS_Nij-Rt2sD2tlK9fmIw&usqp=CAU"
            />
            <CardBody>
              <Card.Title>Update Bank Details</Card.Title>
              <Card.Text>
                Update the bank details if there is any changes
              </Card.Text>
              <Link to={"/UpdateBankDetails"}>
                <Button type="submit" className="button-bg">
                  Update Bank Details
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Container>
      </Container>
      <br />
      <Container className="col-8 d-flex">
        <Card style={{ width: "20rem" }} className="card-bg">
          <Card.Img
            variant="top"
            src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/how-new-age-banking-is-transforming-the-banking-industry-717x404.jpg"
          />
          <CardBody>
            <Card.Title>Get Bank Details</Card.Title>
            <Card.Text>
              Get complete details about your bank for our reference
            </Card.Text>
            <Link to={"/GetBankDetails"}>
              <Button type="submit" className="button-bg">
                Get Bank Details
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Container className="col-4">
          <Card style={{ width: "20rem" }} className="card-bg">
            <Card.Img
              variant="top"
              src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/hero-photos/banking-photography-website-16x9-3600.jpg.imgo.jpg"
            />
            <CardBody>
              <Card.Title>Delete Bank Details</Card.Title>
              <Card.Text>
                Delete the bank details if there is any changes
              </Card.Text>
              <Link to={"/DeleteBankDetails"}>
                <Button type="submit" className="button-bg">
                  Delete Bank Details
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default CardPage;
