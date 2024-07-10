import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,16}$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      errors.email = "Email is not valid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordPattern.test(password)) {
      errors.password =
        "Password must be 8 to 16 characters with at least one digit, one letter, and one special character";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const newUser = { email, password };
        const response = await axios.post(
          "http://localhost:8080/user/login",
          newUser
        );
        console.log("Login succes:", response.data);
        alert("Login successfully");
        navigate("/Page");
      } catch (error) {
        console.error("Failed to Login:", error);
        alert("Failed to Login");
      }
    }
  };

  return (
    <div>
      <Container className="col-4 border my-5 py-3 shadow rounded">
        <div className="mb-3 mt-4 form-container">
          <h2 className="w-bold mb-4 text-center custom-heading">User Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email Id"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </Form.Group>
            <br />
            <div className="d-grid">
              <Button
                variant="info"
                type="submit"
                className="btn btn-primary rounded-pill custom-button"
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};
