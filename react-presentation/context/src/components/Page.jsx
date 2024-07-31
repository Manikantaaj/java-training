import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path as necessary

const Page = () => {
  const { logout } = useAuth(); // Accessing logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to Page</h2>
      <Button
        onClick={handleLogout}
        variant="outline-danger"
        className="btn rounded-pill custom-button"
      >
        Logout
      </Button>
    </div>
  );
};

export default Page;
