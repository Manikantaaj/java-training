import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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
      setLoggedIn(true);
      alert("Login Succes");
      navigate("/Page");
    } else {
      alert("Login failed");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      setEmail("");
      setPassword("");
    }
  }, [loggedIn]);

  return (
    <div className="bg-input">
      <Form onSubmit={handleSubmit} className="form-input">
        <Container className="col-12 border py-5 px-5 shadow rounded">
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
              className="btn btn-info rounded-pill custom-button"
            >
              Login
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  );
};

export default Login;
