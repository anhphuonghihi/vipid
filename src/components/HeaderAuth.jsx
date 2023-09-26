import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/img/VipId.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";
const HeaderAuth = ({ authUser }) => {
  const [menu, setMenu] = useState(false);
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
  const content__menu = [
    {
      link: "/",
      text: "Trang cá nhân",
    },
    {
      link: "/background",
      text: "Giao diện",
    },
    {
      link: "/contact/phuonghole",
      text: "Demo",
    },
    {
      link: "/edit-password",
      text: "Đổi mật khẩu",
    },
    {
      link: "/qrcode",
      text: "Qrcode",
    },
  ];
  return (
    <>
      <div className="header__box__logo">
        <img src={Logo} alt="Logo" />
        <div className="header__auth">
          <div class="menu" id="menu">
            {content__menu &&
              content__menu.map((item, index) => (
                <Link key={index} to={item.link}>
                  {item.text}
                </Link>
              ))}
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
