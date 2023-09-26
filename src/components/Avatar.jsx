import React, { useState } from "react";
import LogoAvatar from "../asset/img/avatar.png";
import { Box, Modal, Typography } from "@mui/material";
import ChangeAvatar from "./ChangeAvatar";
const Avatar = ({ avatar }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState("");
  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setFile(file);
    }
  };
  
  return (
    <div class="logo__avatar">
      <div onClick={handleOpen}>
        <img src={avatar ? avatar : LogoAvatar} alt="Logo" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ChangeAvatar file={file} avatar={avatar} handleChange={handleChange} handleClose={handleClose}/>
      </Modal>
    </div>
  );
};

export default Avatar;
