// Login.js
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path as necessary

const Login = () => {
  const { login } = useAuth(); // Accessing login function from context
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Email and password are required");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[gmail]+\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
      login();
      alert("Login Successful");
      navigate("/Page");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <Container className="col-5 border my-5 py-3 shadow rounded">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center">Login</h2>
          <br />
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email Id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="d-grid">
            <Button
              type="submit"
              className="btn btn-primary rounded-pill custom-button"
            >
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
