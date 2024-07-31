import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Student = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!mobileNo) {
      errors.mobileNo = "Mobile Number is required";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const newUser = { firstName, email, lastName, mobileNo, address };
        const response = await axios.post(
          "http://localhost:8080/api/student",
          newUser
        );
        console.log("User added:", response.data);
        alert("User added successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setMobileNumber("");
        setErrors({});
      } catch (error) {
        console.error("Failed to add user:", error);
        alert("Failed to add user");
      }
    }
  };

  return (
    <Container className="col-5 my-3 py-5 border shadow">
      <h2 className="text-center">Student Details</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Student First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter Your First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Student Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Student Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Student Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            name="mobileNo"
            value={mobileNo}
            placeholder="Enter Your Mobile Number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {errors.mobileNo && <p style={{ color: "red" }}>{errors.mobileNo}</p>}
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Student Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={address}
            placeholder="Enter Your Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
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
    </Container>
  );
};

export default Student;
