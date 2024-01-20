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
import API from "../API";
import { useLocalStorage } from "usehooks-ts";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = localStorage.getItem("token");
  const [anh, setAnh] = useLocalStorage("response_data_anh");
  const [diachi, setDiachi] = useLocalStorage("response_data_diachi");
  const [dichvu, setDichvu] = useLocalStorage("response_data_dichvu");
  const [duongdanmangxahoi, setDuongdanmangxahoi] = useLocalStorage(
    "response_data_duongdanmangxahoi"
  );
  const [email, setEmail] = useLocalStorage("response_data_email");
  const [hovaten, setHovaten] = useLocalStorage("response_data_hovaten");
  const [loainganhang, setLoainganhang] = useLocalStorage(
    "response_data_loainganhang"
  );
  const [mangxahoi, setMangxahoi] = useLocalStorage("response_data_mangxahoi");
  const [sodienthoai, setSodienthoai] = useLocalStorage(
    "response_data_sodienthoai"
  );
  const [taikhoannganhang, setTaikhoannganhang] = useLocalStorage(
    "response_data_taikhoannganhang"
  );
  const [tencongty, setTencongty] = useLocalStorage("response_data_tencongty");
  const [vitri, setVitri] = useLocalStorage("response_data_vitri");
  const [website, setWebsite] = useLocalStorage("response_data_website");
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
      const login_open = async () => {
        try {
          const response = await API.post(`login`, data);
          if (response.data.data.token) {
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("client", response.data.data.id);
            const response_data = await API.get(
              `http://191.96.31.204:1337/me`,
              {
                headers: {
                  "x-access-token": response.data.data.token,
                  "x-client-id": response.data.data.id,
                  "x-api-key":
                    "z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232",
                },
              }
            );

            setAnh(response_data.data.data.data.anh);
            setDiachi(response_data.data.data.data.diachi);
            setDichvu(response_data.data.data.data.dichvu);
            setDuongdanmangxahoi(
              response_data.data.data.data.duongdanmangxahoi
            );
            setEmail(response_data.data.data.data.email);
            setHovaten(response_data.data.data.data.hovaten);
            setLoainganhang(response_data.data.data.data.loainganhang);
            setMangxahoi(response_data.data.data.data.mangxahoi);
            setSodienthoai(response_data.data.data.data.sodienthoai);
            setTaikhoannganhang(response_data.data.data.data.taikhoannganhang);
            setTencongty(response_data.data.data.data.tencongty);
            setVitri(response_data.data.data.data.vitri);
            setWebsite(response_data.data.data.data.website);
          }
          navigate("/");
          return response;
        } catch (err) {
          console.log(err);
          toast.error("Vui lòng nhập lại tài khoản và mật khẩu");
          return;
        }
      };
      login_open();
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
