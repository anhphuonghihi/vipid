import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";
import { updatePassword } from "../redux/slice/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      oldPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Bắt buộc nhập mã"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Mật khẩu chưa được nhập trùng khớp")
        .required("Bắt buộc nhập mật khẩu")
        .min(5, "Tên người dùng phải trên 5 kí tự"),
      newPassword: Yup.string()
        .required("Bắt buộc nhập mật khẩu")
        .min(5, "Tên người dùng phải trên 5 kí tự"),
    }),
    onSubmit: (data) => {
      const { oldPassword, newPassword } = data;
      dispatch(
        updatePassword({
          crr_password__user: oldPassword,
          password__user_new: newPassword,
        })
      );
    },
  });
  return (
    <>
      <GoBack title="Đổi mật khẩu" />
      <HeaderEdit title="Đổi mật khẩu" />
      <div className="updatePasswordContainer">
        <div className="updatePasswordBox">
          <form className="updatePasswordForm" onSubmit={formik.handleSubmit}>
            <div className="loginPassword">
              <TextField
                autoComplete="oldPassword"
                name="oldPassword"
                value={formik.values.oldPassword}
                fullWidth
                id="oldPassword"
                label="Mật khẩu cũ"
                autoFocus
                sx={{ mt: 1, mb: 1 }}
                onChange={formik.handleChange}
              />
              {formik.errors.oldPassword && formik.touched.oldPassword && (
                <p className="help is-danger">{formik.errors.oldPassword}</p>
              )}
              <TextField
                fullWidth
                name="newPassword"
                value={formik.values.newPassword}
                label="Mật khẩu mới"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ mt: 1, mb: 1 }}
                onChange={formik.handleChange}
              />
              {formik.errors.newPassword && formik.touched.newPassword && (
                <p className="help is-danger">{formik.errors.newPassword}</p>
              )}
              <TextField
                fullWidth
                name="confirmPassword"
                value={formik.values.confirmPassword}
                label="Xác nhận mật khẩu"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                onChange={formik.handleChange}
                sx={{ mt: 1, mb: 1 }}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="help is-danger">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 2, mb: 2 }}
            >
              Đổi
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
