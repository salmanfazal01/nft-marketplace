import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
