import React from "react";
import { useDispatch } from "react-redux";
import { backgroundChange } from "../redux/slice/counterSlice";
import { Button } from "@mui/material";

const BoxBackground = () => {
  const dispatch = useDispatch();
  const onBackground = () => {
    dispatch(backgroundChange("theme-dark"));
  };
  const onBackgroundLight = () => {
    dispatch(backgroundChange("theme-light"));
  };
  return (
    <div>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={onBackground}
      >
        dark
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={onBackgroundLight}
      >
        light
      </Button>
    </div>
  );
};

export default BoxBackground;
