import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const token = useSelector((state) => state.auth?.user.token);
  const background = useSelector((state) => state.counter.background);
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  const theme = localStorage.getItem("background");
  return (
    <div className={`layout__container ${theme ? theme : "theme-dark"}`}>
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
