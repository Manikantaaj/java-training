import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateBankDetails = () => {
  const [id, setId] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [address, setAddress] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const navigator = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !bankName || !bankBranch || !address || !ifscCode) {
      alert("All Feilds are required");
      return;
    }

    const updateDetails = {
      id: id,
      bankName: bankName,
      bankBranch: bankBranch,
      address: address,
      ifscCode: ifscCode,
    };
    axios
      .put("http://localhost:8080/api/update", updateDetails)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Bank details is updated");
        navigator("/");
      })
      .catch((error) => {
        console.error("Failed to update bank:", error);
        alert("Failed to update bank details. Please check your bank id.");
      });
  };
  return (
    <div>
      <Container className="col-5 my-5 py-5 border shadow">
        <h2 className="text-center">Update Bank Details</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Bank Id</Form.Label>
            <Form.Control
              type="number"
              name="id"
              value={id}
              placeholder="Enter Bank Id"
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
              placeholder="Enter Bank Name"
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
              placeholder="Enter Bank Branch"
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
              placeholder="Enter Bank Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Bank IFSC Code</Form.Label>
            <Form.Control
              type="number"
              name="ifscCode"
              value={ifscCode}
              placeholder="Enter Bank IFSC Code"
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="d-grid">
            <Button type="submit" className="btn">
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateBankDetails;
