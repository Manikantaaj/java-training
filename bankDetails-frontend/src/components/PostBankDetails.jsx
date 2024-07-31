import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostBankDetails = () => {
  const [id, setId] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [address, setBankAddress] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const navigator = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bankName || !bankBranch || !address || !ifscCode || !id) {
      alert("All fields are required");
      return;
    }

    const bankData = {
      id: id,
      bankName: bankName,
      bankBranch: bankBranch,
      address: address,
      ifscCode: ifscCode,
    };

    axios
      .post("http://localhost:8080/api/bank", bankData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Bank details added successfully");
        navigator("/");
      })
      .catch((error) => {
        console.error("Failed to add bank:", error);
        alert("Failed to add bank details. Please check your bank id.");
      });
  };

  return (
    <div className="bg-input">
      <Container className="col-5 py-5 my-5 shadow">
        <div className="form-input">
          <h2 className="text-center">Bank details</h2>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Bank Id</Form.Label>
              <Form.Control
                type="number"
                name="id"
                value={id}
                placeholder="Please Enter your Id"
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                name="bankName"
                value={bankName}
                placeholder="Please Enter Bank Name"
                onChange={(e) => setBankName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Bank Branch Name</Form.Label>
              <Form.Control
                type="text"
                name="bankBranch"
                value={bankBranch}
                placeholder="Please Enter Bank Branch"
                onChange={(e) => setBankBranch(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Bank Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                placeholder="Please Enter bank address"
                onChange={(e) => setBankAddress(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Bank IFSC Code</Form.Label>
              <Form.Control
                type="number"
                name="ifscCode"
                value={ifscCode}
                placeholder="Please Enter IFSC code"
                onChange={(e) => setIfscCode(e.target.value)}
              />
            </Form.Group>
            <br />
            <div className="d-grid">
              <Button
                type="submit"
                className="btn btn-primary rounded-pill custom-button"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default PostBankDetails;
