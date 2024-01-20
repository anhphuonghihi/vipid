import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const token = useSelector((state) => state.auth?.user.token);


  return (
    <div className={`layout__container theme-dark`}>
      {token && (
        <>
          <div className="background"></div>
          <div className="background__img"></div>
        </>
      )}
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Layout;
