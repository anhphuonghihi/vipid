import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const token = useSelector((state) => state.auth?.user.token);
  const background = useSelector((state) => state.counter.background);
  return (
    <div className={`layout__container ${background}`}>
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
