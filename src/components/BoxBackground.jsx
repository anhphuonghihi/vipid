import React from "react";
import { useDispatch } from "react-redux";
import { backgroundChange } from "../redux/slice/counterSlice";
import { Button } from "@mui/material";
import { getContactsByUser } from "../redux/slice/contactSlice";
import { toast } from "react-toastify";

const BoxBackground = () => {
  const dispatch = useDispatch();
  const onBackground = (value) => {
    dispatch(backgroundChange(value));
    dispatch(getContactsByUser());
  };
  return (
    <div>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => onBackground("theme-dark")}
      >
        Dark
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => onBackground("theme-light")}
      >
        Light
      </Button>
    </div>
  );
};

export default BoxBackground;
