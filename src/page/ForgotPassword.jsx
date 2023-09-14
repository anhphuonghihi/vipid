import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Button, TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/slice/authSlice";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (!authUser?.token) {
      <Navigate to={"/"} />;
    }
  }, [!authUser.token]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Bắt buộc nhập email")
    }),
    onSubmit: (data) => {
      dispatch(forgotPassword(data));
      navigate("/");
    },
  });

  return (
    <>
      <div className="login__page">
        <Header />
        <div className="text__box__login">
          <Title title="Quên mật khẩu" />
          <SubTitle subtitle="Vui lòng nhập email của bạn" />
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
          />
          {formik.errors.email && formik.touched.email && (
            <p className="help is-danger">{formik.errors.email}</p>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Quên mật khẩu
          </Button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
