// Page.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Page = ({ loggedIn, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function passed from props
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <div>
      <h2>Welcome to Student page</h2>
      {loggedIn && (
        <Button onClick={handleLogout} variant="outline-danger" className="btn rounded-pill custom-button">
          Logout
        </Button>
      )}
    </div>
  );
};

export default Page;
