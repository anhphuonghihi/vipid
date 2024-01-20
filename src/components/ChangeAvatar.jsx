import { Button, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import API from "../API";
import Avatar from "react-avatar-edit";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
const ChangeAvatar = ({ avatar, handleChange, handleClose, file }) => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const client = useReadLocalStorage("client");
  const [anh, setAnh] = useLocalStorage("response_data_anh");
  const handleEdit = async (avatar) => {
    try {
      setAnh(avatar);
      await API.patch(`http://191.96.31.204:1337/edit/contact/${client}`, {
        anh: avatar,
      });
      toast.success("Cập nhận ảnh đại diện thành công");
    } catch (err) {
      console.log(err);
    }
    handleClose();
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
