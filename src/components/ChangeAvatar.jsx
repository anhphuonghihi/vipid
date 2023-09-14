import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/slice/contactSlice";

const ChangeAvatar = ({ avatar, handleChange }) => {
  const dispatch = useDispatch();
  const handleEdit = (avatar) => {
    const updatedContactData = { id: "1", avatar };
    dispatch(updateContact({ id: "1", updatedContactData }));
  };
  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        id="upload"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="upload">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <img src={avatar && avatar} alt="Logo" />
        </IconButton>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={() => handleEdit(avatar)}
        >
          Lưu thông tin
        </Button>
      </label>
      <label htmlFor="avatar" />
    </div>
  );
};

export default ChangeAvatar;
