import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/img/VipId.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
const HeaderAuth = () => {
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
  const anh = useReadLocalStorage("client");
  const content__menu = [
    {
      link: "/",
      text: "Trang cá nhân",
    },

    // {
    //   link: "/edit-password",
    //   text: "Đổi mật khẩu",
    // },
    {
      link: `/${anh}`,
      text: "Demo",
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
          <div className="menu" id="menu">
            {content__menu &&
              content__menu.map((item, index) => (
                <Link key={index} to={item.link}>
                  {item.text}
                </Link>
              ))}
            <button className="link" onClick={SubmitLogout}>
              Đăng xuất
            </button>
          </div>

          <button className="icon" onClick={onClickMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderAuth;
