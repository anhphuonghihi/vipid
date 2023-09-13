import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "@mui/material";

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
      <div className="updatePasswordContainer">
        <div className="updatePasswordBox">
          <h2 className="updatePasswordHeading">Đổi mật khẩu</h2>

          <form className="updatePasswordForm" onSubmit={updatePasswordSubmit}>
            <div className="loginPassword">
              <Input
                type="password"
                placeholder="Mật khẩu cũ"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="loginPassword">
              <Input
                type="password"
                placeholder="Mật khẩu mới"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <Input
                type="password"
                placeholder="Xác nhận mật khẩu"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" value="Đổi" className="updatePasswordBtn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
