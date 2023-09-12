import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/img/VipId.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";
const HeaderAuth = ({ authUser }) => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickMenu = () => {
    var element = document.getElementById("menu");
    element.classList.toggle("active");
  };
  const SubmitLogout = () => {
    dispatch(logout());
    return navigate("/login");
  };
  return (
    <>
      <div className="header__box__logo">
        <img src={Logo} alt="Logo" />
        <div className="header__auth">
          <div class="menu" id="menu">
            <Link to="#news">Trang cá nhân</Link>
            <Link to="#about">Giao diện</Link>
            <Link to="#contact">Đổi mật khẩu</Link>
            <button class="link" onClick={SubmitLogout}>
              Đăng xuất
            </button>
          </div>

          <button class="icon" onClick={onClickMenu}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderAuth;
