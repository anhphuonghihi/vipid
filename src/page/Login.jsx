import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      lastname: "",
      name: "",
      code: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bắt buộc nhập họ tên"),
      password: Yup.string().required("Bắt buộc nhập mật khẩu"),
    }),
    onSubmit: (value, props) => {
      setTimeout(() => {
        props.resetForm();
        props.setSubmitting(false);
      }, 2000);
    },
  });
  return (
    <div class="login__page">
      <Header login />
      <div className="text__box__login">
        <Title title="Đăng nhập" />
        <SubTitle subtitle="Nhập tài khoản và mật khẩu của bạn" />
      </div>
      <form className="form__login" onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="name"
          name="name"
          required
          fullWidth
          id="name"
          label="Tên đăng nhập"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Đăng nhập
        </Button>
      </form>
      <Link to="/forgot-password">Quên mật khẩu</Link>
    </div>
  );
};

export default Login;
