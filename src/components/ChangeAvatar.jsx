import { Avatar, Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import API from "../API";
import { getContactsByUser } from "../redux/slice/contactSlice";
import { getInfosByUser } from "../redux/slice/infoSlice";
const ChangeAvatar = ({ avatar, handleChange, handleClose, file }) => {
  const dispatch = useDispatch();
  const handleEdit = async (avatar) => {
    try {
      await API.post(`/wp2023/v1/profile/`, {
        avatar: avatar,
      });
      toast.success("Cập nhận ảnh đại diện thành công");
    } catch (err) {
      console.log(err);
    }
    handleClose();

    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  };

  return (
    <div className="mode_css">
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
          <img src={file ? file : avatar} alt="Logo" />
        </IconButton>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={() => handleEdit(file)}
        >
          Lưu thông tin
        </Button>
      </label>
      <label htmlFor="avatar" />
    </div>
  );
};

export default ChangeAvatar;
