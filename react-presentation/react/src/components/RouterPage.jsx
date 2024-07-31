import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page";
import Login from "./Login";

const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPage;
