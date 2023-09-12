import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const token = useSelector((state) => state.auth.user.token);
  return (
    <div className="layout__container">
      {token && (
        <>
          <div class="background"></div>
          <div class="background__img"></div>
        </>
      )}
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Layout;
