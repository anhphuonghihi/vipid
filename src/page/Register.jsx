import React, { useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import { register } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { toast } from "react-toastify";
import API from "../API";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dki, setDki] = useLocalStorage("dki");
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      tencongty: "",
      sodienthoai: "",
      vitri: "",
    },
    validationSchema: Yup.object({
      lastname: Yup.string()
        .min(5, "Họ tên phải trên 5 kí tự")
        .max(25, "Họ tên phải dưới 25 kí tự")
        .required("Bắt buộc nhập họ tên"),
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Bắt buộc nhập email")
        .test(
          "is-valid",
          (message) => `Vui lòng nhập đúng định dạng email`,
          (value) => value && isEmailValidator(value)
        ),
      password: Yup.string()
        .required("Bắt buộc nhập mật khẩu")
        .min(8, "Mật khẩu phải trên 8 kí tự"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu chưa được nhập trùng khớp")
        .required("Bắt buộc nhập mật khẩu"),

      tencongty: Yup.string().required("Bắt buộc nhập tên công ty"),
      sodienthoai: Yup.string()
        .required("Bắt buộc nhập mã")
        .matches(phoneRegExp, "Vui lòng nhập đúng số điện thoại"),
      vitri: Yup.string().required("Bắt buộc nhập vị trí"),
    }),
    onSubmit: (data) => {
      const { lastname, email, password, tencongty, sodienthoai, vitri } = data;
      const register = async () => {
        try {
          const data = {
            email: email,
            matkhau: password,
            hovaten: lastname,
            tencongty: tencongty,
            sodienthoai: sodienthoai,
            vitri: vitri,
          };
          const res = await API.post("/resgiter", data);
          console.log(res);
          if (res.status === 200) {
            toast.success("Đăng kí thành công");
            setDki(true);
          }
          return true;
        } catch (err) {
          toast.error(err.response.data.message);
          return;
        }
      };
      register();
    },
  });
  const authUser = useReadLocalStorage("dki");
  useEffect(() => {
    setDki(false)
    if (authUser) {
      navigate("/login");
    }
  }, [authUser]);
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
          label="Họ và tên"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.lastname && formik.touched.lastname && (
          <p className="help is-danger">{formik.errors.lastname}</p>
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
        <TextField
          autoComplete="tencongty"
          name="tencongty"
          value={formik.values.tencongty}
          fullWidth
          id="tencongty"
          label="Tên công ty"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.tencongty && formik.touched.tencongty && (
          <p className="help is-danger">{formik.errors.tencongty}</p>
        )}
        <TextField
          autoComplete="sodienthoai"
          name="sodienthoai"
          value={formik.values.sodienthoai}
          fullWidth
          id="sodienthoai"
          label="Số điện thoại"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.sodienthoai && formik.touched.sodienthoai && (
          <p className="help is-danger">{formik.errors.sodienthoai}</p>
        )}
        <TextField
          autoComplete="vitri"
          name="vitri"
          value={formik.values.vitri}
          fullWidth
          id="vitri"
          label="Vị trí"
          autoFocus
          onChange={formik.handleChange}
        />
        {formik.errors.vitri && formik.touched.vitri && (
          <p className="help is-danger">{formik.errors.vitri}</p>
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
      {/* <Link to="/forgot-password">Quên mật khẩu</Link> */}
    </div>
  );
};

export default Register;
