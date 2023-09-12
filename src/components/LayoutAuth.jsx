import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";
import Login from "../page/Login";
import HeaderAuth from "./HeaderAuth";
import { ToastContainer } from "react-toastify";
const ProtectedRoute = () => {
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser?.token) {
      <Navigate to={"/login"} />;
    }
  }, [!authUser.token]);
  console.log(authUser.token);
  const SubmitLogout = () => {
    dispatch(logout());
    return navigate("/login");
  };
  return (
    <>
      {authUser.token ? (
        <div>
          <HeaderAuth authUser={authUser} />
          <div>
            <Outlet />
            <ToastContainer />
          </div>
        </div>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
