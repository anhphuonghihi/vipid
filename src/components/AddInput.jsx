import { TextField } from "@mui/material";
import React from "react";

const AddInput = ({ handleChange, values, name }) => {
  return (
    <div>
      <TextField
        autoComplete="name"
        name={name}
        fullWidth
        id={name}
        label="Nhập thông tin"
        autoFocus
        onChange={handleChange}
        value={values}
        sx={{ mt: 1, mb: 1 }}
      />
    </div>
  );
};

export default AddInput;
