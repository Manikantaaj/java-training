import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const GetBankDetails = () => {
  const [BankDetails, setBankDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/fetchall");
      setBankDetails(response.data);
    } catch (error) {
      console.error("error in fetching bank data:", error);
    }
  };

  return (
    <div>
      <Container className="col-8 py-5 my-5">
        <h2 className="text-center">
          Click Button to get all the bank details
        </h2>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            type="button"
            className="btn"
            onClick={fetchData}
            disabled={isLoading}
          >
            {isLoading ? "Your Bank Details" : "Click here"}
          </Button>
        </div>
      </Container>
      {BankDetails.length > 0 && (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Bank Name</th>
                <th>Branch Name</th>
                <th>Address</th>
                <th>IFSC Code</th>
              </tr>
            </thead>
            <tbody>
              {BankDetails.map((bank) => (
                <tr key={bank.id}>
                  <td>{bank.id}</td>
                  <td>{bank.bankName}</td>
                  <td>{bank.bankBranch}</td>
                  <td>{bank.address}</td>
                  <td>{bank.ifscCode}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default GetBankDetails;
