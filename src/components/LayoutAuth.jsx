import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";
import Login from "../page/Login";
import HeaderAuth from "./HeaderAuth";
import { ToastContainer } from "react-toastify";
const ProtectedRoute = () => {
  const authUser = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      <Navigate to={"/login"} />;
    }
  }, [!authUser]);

  return (
    <>
      <div>
        <div>
          <div class="background"></div>
          <div class="background__img demo"></div>
          <Outlet />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProtectedRoute;
