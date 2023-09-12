import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout__container">
      <Outlet />
    </div>
  );
};

export default Layout;
