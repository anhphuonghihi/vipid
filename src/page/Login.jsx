import React, { useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Button, TextField } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);
  const isError = useSelector((state) => state.auth.isError);
  useEffect(() => {
    if (!authUser?.token) {
      <Navigate to={'/'} />
    }
  }, [!authUser.token]);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bắt buộc nhập họ tên"),
      password: Yup.string().required("Bắt buộc nhập mật khẩu"),
    }),
    onSubmit: (data) => {
      dispatch(login(data));
      navigate("/");
    },
  });
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(isError);
  //   }
  // }, [isError]);
  return (
    <div className="login__page">
      <Header login />
      <div className="text__box__login">
        <Title title="Đăng nhập" />
        <SubTitle subtitle="Nhập tài khoản và mật khẩu của bạn" />
      </div>
      <form className="form__login" onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="name"
          name="name"
          fullWidth
          id="name"
          label="Tên đăng nhập"
          autoFocus
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <p className="help is-danger">{formik.errors.name}</p>
        )}
        <TextField
          fullWidth
          name="password"
          label="Mật khẩu"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />{" "}
        {formik.errors.password && formik.touched.password && (
          <p className="help is-danger">{formik.errors.password}</p>
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
      <Link to="/forgot-password">Quên mật khẩu</Link>
    </div>
  );
};

export default Login;
