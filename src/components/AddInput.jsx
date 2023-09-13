import { TextField } from "@mui/material";
import React from "react";

const AddInput = ({ handleChange, values }) => {
  return (
    <div>
      <TextField
        autoComplete="name"
        name="name"
        fullWidth
        id="name"
        label="Nhập thông tin"
        autoFocus
        onChange={handleChange}
        value={values}
      />
    </div>
  );
};

export default AddInput;
