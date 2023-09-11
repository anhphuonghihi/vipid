import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/img/VipId.png";
const Header = ({ login }) => {
  return (
    <div class="header__container">
      <div className="header__box__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__box__link">
        {login ? (
          <Link to="/register">Đăng kí</Link>
        ) : (
          <Link to="/login">Đăng Nhập</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
