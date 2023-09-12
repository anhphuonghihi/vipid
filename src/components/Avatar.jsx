import React from "react";
import LogoAvatar from "../asset/img/avatar.png";
const Avatar = ({ avatar }) => {
  console.log(avatar);
  return (
    <div class="logo__avatar">
      <img src={avatar ? avatar : LogoAvatar} alt="Logo" />
    </div>
  );
};

export default Avatar;
