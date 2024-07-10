import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { User } from "../components/User";
import { Login } from "../components/Login";
import Page from "../components/Page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
        <Route path="/Page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
