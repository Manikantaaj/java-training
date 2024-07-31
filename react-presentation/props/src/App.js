import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// App.js or ParentComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Login from './components/Login';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false); // Update loggedIn state
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/Page"
          element={<Page loggedIn={loggedIn} logout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
