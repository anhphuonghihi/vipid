import { Button, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import API from "../API";
import Avatar from "react-avatar-edit";
import { getContactsByUser } from "../redux/slice/contactSlice";
import { getInfosByUser } from "../redux/slice/infoSlice";
const ChangeAvatar = ({ avatar, handleChange, handleClose, file }) => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const handleEdit = async (avatar) => {
    try {
      // await API.post(`/wp2023/v1/profile/`, {
      //   avatar: avatar,
      // });
      toast.success("Cập nhận ảnh đại diện thành công");
    } catch (err) {
      console.log(err);
    }
    handleClose();
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  };
  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };
  return (
    <div>
      <div className="mode_css">
        <Avatar
          width={300}
          height={300}
          src={src}
          onClose={onClose}
          onCrop={onCrop}
          label={"Chọn ảnh"}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={() => handleEdit(preview)}
        >
          Lưu thông tin
        </Button>

        <label htmlFor="avatar" />
      </div>
    </div>
  );
};

export default ChangeAvatar;
