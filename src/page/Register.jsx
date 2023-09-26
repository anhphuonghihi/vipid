import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import { register } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneRegExp = /^[A-Za-z0-9]*$/;
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
      lastname: Yup.string()
        .min(5, "Họ tên phải trên 5 kí tự")
        .max(25, "Họ tên phải dưới 25 kí tự")
        .required("Bắt buộc nhập họ tên"),
      name: Yup.string()
        .min(5, "Tên người dùng phải trên 5 kí tự")
        .max(25, "Tên người dùng phải dưới 25 kí tự")
        .required("Bắt buộc nhập tên người dùng")
        .matches(phoneRegExp, "Tên người dùng không có kí tự đặc biệt"),

      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Bắt buộc nhập email")
        .test(
          "is-valid",
          (message) => `Vui lòng nhập đúng định dạng email`,
          (value) => value && isEmailValidator(value)
        ),
      code: Yup.string().required("Bắt buộc nhập mã"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu chưa được nhập trùng khớp")
        .required("Bắt buộc nhập mật khẩu"),
      password: Yup.string().required("Bắt buộc nhập mật khẩu"),
    }),
    onSubmit: (data) => {
      dispatch(register(data));
      navigate("/login");
    },
  });

  return (
    <div className="login__page">
      <Header />
      <div className="text__box__login">
        <Title title="Đăng ký" />
      </div>
      <form className="form__login" onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="lastname"
          name="lastname"
          value={formik.values.lastname}
          fullWidth
          id="lastname"
          label="Tên đầy đủ"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.lastname && formik.touched.lastname && (
          <p className="help is-danger">{formik.errors.lastname}</p>
        )}
        <TextField
          autoComplete="name"
          name="name"
          value={formik.values.name}
          fullWidth
          id="name"
          label="Tên đăng nhập"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="help is-danger">{formik.errors.name}</p>
        )}
        <TextField
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="help is-danger">{formik.errors.email}</p>
        )}
        <TextField
          autoComplete="code"
          name="code"
          value={formik.values.code}
          fullWidth
          id="code"
          label="Mã xác nhận"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.code && formik.touched.code && (
          <p className="help is-danger">{formik.errors.code}</p>
        )}
        <TextField
          fullWidth
          name="password"
          value={formik.values.password}
          label="Nhập mật khẩu"
          type="password"
          id="password"
          autoComplete="new-password"
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="help is-danger">{formik.errors.password}</p>
        )}
        <TextField
          fullWidth
          name="confirmPassword"
          value={formik.values.confirmPassword}
          label="Nhập lại mật khẩu"
          type="password"
          id="confirmPassword"
          autoComplete="confirm-password"
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="help is-danger">{formik.errors.confirmPassword}</p>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Đăng ký
        </Button>
      </form>
      <Link to="/forgot-password">Quên mật khẩu</Link>
    </div>
  );
};

export default Register;
