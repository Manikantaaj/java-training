import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page";
import Login from "./Login";
import { AuthProvider } from "./AuthContext"; // Adjust the path as necessary

const RouterPage = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Page" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default RouterPage;
