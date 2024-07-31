import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const DeleteBankDetails = () => {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id) {
      alert("Id is rquired to delete bank details");
    }

    axios
      .delete(`http://localhost:8080/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Bank data is deleted");
      })
      .catch((error) => {
        console.error("Failed to delete bank:", error);
        alert("Failed to delete bank details. Please check your bank id.");
      });
  };
  return (
    <div>
      <Container className="col-6 my-5 py-5 border shadow">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center">
            Enter Bank id to delete the bank details
          </h2>
          <br />
          <Form.Label>Bank id</Form.Label>
          <Form.Control
            type="number"
            name="id"
            value={id}
            placeholder="Enter Bank id to delete bank details "
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <div className="d-grid">
            <Button type="submit" className="btn">
              Click
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default DeleteBankDetails;
