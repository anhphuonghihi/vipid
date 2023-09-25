import React from "react";
import { useDispatch } from "react-redux";
import { backgroundChange } from "../redux/slice/counterSlice";
import { Button } from "@mui/material";
import { getContactsByUser } from "../redux/slice/contactSlice";

const BoxBackground = () => {
  const dispatch = useDispatch();
  const onBackground = () => {
    dispatch(backgroundChange("theme-dark"));
    dispatch(getContactsByUser());
  };
  const onBackgroundLight = () => {
    dispatch(backgroundChange("theme-light"));
    dispatch(getContactsByUser());
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
        Dark
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={onBackgroundLight}
      >
        Light
      </Button>
    </div>
  );
};

export default BoxBackground;
