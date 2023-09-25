import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const AddSelect = ({ handleChange, values, name, dataSelect, label }) => {
  return (
    <div>
      <Select
        name={name}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={values}
        fullWidth
        label="Nhập thông tin"
        onChange={handleChange}
        sx={{ mt: 1, mb: 1 }}
      >
        {dataSelect.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default AddSelect;
