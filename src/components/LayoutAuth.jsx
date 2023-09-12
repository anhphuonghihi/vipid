import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";
import Login from "../page/Login";
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
          <ul>
            <li>
              <Link to="/">Add Post</Link>
            </li>
            <li>
              <button onClick={SubmitLogout}>Logout</button>
            </li>
            <li>
              <Link to="/profile">Hi {authUser.user_display_name}</Link>
            </li>
          </ul>
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
