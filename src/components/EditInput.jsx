import { TextField } from "@mui/material";
import React from "react";

const EditInput = ({ handleChange, values, name, label }) => {
  return (
    <div>
      <TextField
        autoComplete="name"
        name={name}
        fullWidth
        id={name}
        label={label}
        autoFocus
        onChange={handleChange}
        value={values}
      />
    </div>
  );
};

export default EditInput;
