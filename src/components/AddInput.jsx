import { TextField } from "@mui/material";
import React from "react";

const AddInput = ({ handleChange, values, name, lab }) => {
  return (
    <div>
      <TextField
        autoComplete="name"
        name={name}
        fullWidth
        id={name}
        label={lab ? lab : "Nhập thông tin"}
        autoFocus
        onChange={handleChange}
        value={values}
        sx={{ mt: 1, mb: 1 }}
      />
    </div>
  );
};

export default AddInput;
