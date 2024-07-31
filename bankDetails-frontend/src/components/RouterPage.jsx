import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PostBankDetails from "./PostBankDetails";
import GetBankDetails from "./GetBankDetails";
import UpdateBankDetails from "./UpdateBankDetails";
import DeleteBankDetails from "./DeleteBankDetails";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PostBankDetails" element={<PostBankDetails />} />
          <Route path="/GetBankDetails" element={<GetBankDetails />} />
          <Route path="/UpdateBankDetails" element={<UpdateBankDetails />} />
          <Route path="/DeleteBankDetails" element={<DeleteBankDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
