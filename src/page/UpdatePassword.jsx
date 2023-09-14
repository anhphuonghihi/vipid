import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";

const UpdatePassword = () => {
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    // dispatch(updatePassword(myForm));
  };

  return (
    <>
      <GoBack title="Đổi mật khẩu" />
      <HeaderEdit title="Đổi mật khẩu" />
      <div className="updatePasswordContainer">
        <div className="updatePasswordBox">
          <form className="updatePasswordForm" onSubmit={updatePasswordSubmit}>
            <div className="loginPassword">
              <TextField
                type="password"
                fullWidth
                placeholder="Mật khẩu cũ"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="loginPassword">
              <TextField
                fullWidth
                type="password"
                label="Mật khẩu mới"
                placeholder="Mật khẩu mới"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <TextField
                type="password"
                placeholder="Xác nhận mật khẩu"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              value="Đổi"
              className="updatePasswordBtn"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
