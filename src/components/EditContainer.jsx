import { TextField } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const EditContainer = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bắt buộc ..."),
    }),
    onSubmit: (data) => {
      navigate("/");
    },
  });
  return (
    <div>
      <TextField
        autoComplete="name"
        name="name"
        fullWidth
        id="name"
        label="Nhập thông tin"
        autoFocus
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && formik.touched.name && (
        <p className="help is-danger">{formik.errors.name}</p>
      )}
      {formik.errors.password && formik.touched.password && (
        <p className="help is-danger">{formik.errors.password}</p>
      )}
    </div>
  );
};

export default EditContainer;
