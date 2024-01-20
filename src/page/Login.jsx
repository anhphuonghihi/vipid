import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Button, TextField } from "@mui/material";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import isEmailValidator from "validator/lib/isEmail";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = localStorage.getItem("token");
  useEffect(() => {
    if (authUser) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [authUser]);

  const formik = useFormik({
    initialValues: {
      email: "",
      matkhau: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Bắt buộc nhập email")
        .test(
          "is-valid",
          (message) => `Vui lòng nhập đúng định dạng email`,
          (value) => value && isEmailValidator(value)
        ),
      matkhau: Yup.string().required("Bắt buộc nhập mật khẩu"),
    }),
    onSubmit: (data) => {
      dispatch(login(data));
      navigate("/");
    },
  });

  return (
    <div className="login__page">
      <Header login />
      <div className="text__box__login">
        <Title title="Đăng nhập" />
        <SubTitle subtitle="Nhập tài khoản và mật khẩu của bạn" />
      </div>
      <form className="form__login" onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="email"
          name="email"
          fullWidth
          id="email"
          label="Email"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.email}
          sx={{ mt: 1, mb: 1 }}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="help is-danger">{formik.errors.email}</p>
        )}
        <TextField
          fullWidth
          name="matkhau"
          label="Mật khẩu"
          type="password"
          id="matkhau"
          autoComplete="new-matkhau"
          value={formik.values.matkhau}
          onChange={formik.handleChange}
        />
        {formik.errors.matkhau && formik.touched.matkhau && (
          <p className="help is-danger">{formik.errors.matkhau}</p>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Đăng nhập
        </Button>
      </form>
      {/* <Link to="/forgot-password">Quên mật khẩu</Link> */}
    </div>
  );
};

export default Login;
