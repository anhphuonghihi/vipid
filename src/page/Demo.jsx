import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../API";
import { useState } from "react";
import LogoAvatar from "../asset/img/avatar.png";
import { Box } from "@mui/material";
const Demo = () => {
  let { username } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [userContact, setUserContact] = useState([]);
  const [theme, seTheme] = useState([]);
  const navigate = useNavigate();
  const onNav = () => {
    navigate("/");
  };
  useEffect(() => {
    const getData = async () => {
      const response = await API.get(
        `https://hcsoftvn.com/wp-json/wp2023/v1/profile/public?user_login=${username}`
      );

     
      setUserInfo(response.data.user);
      setUserContact(response.data.contact);

      seTheme(userInfo[0]?.user_nicename);
    };
    getData();
  }, [userContact, userInfo, username]);
  const len = userContact?.length;

  return (
    <div className={`layout__container ${theme ? theme : "theme-dark"}`}>
      <div class="background"></div>
      <div class="background__img demo"></div>
      <div class="logo__avatar">
        <div>
          <img
            src={
              userInfo[0]?.user_activation_key
                ? userInfo[0]?.user_activation_key
                : LogoAvatar
            }
            alt="Logo"
          />
        </div>
      </div>
      <div class={`contact__bottom__box name`}>
        <div class="contact__bottom__box--icon">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="contact__bottom__box--text">
          <div class="contact__bottom__box--title">Họ tên</div>
          <div
            class="contact__bottom__box--content contact__phone"
            id="contact__phone"
          >
            {userInfo[0]?.display_name}
          </div>
        </div>
      </div>

      <div class="list__info">
        {userContact &&
          userContact.map((item, index) => {
            const string = item.contact__id;
            const substring = "tk";
            return (
              <div
                key={index}
                class={`contact__bottom__box ${`${len === index && "last"} ${
                  item.id
                }`}`}
              >
                <div class="contact__bottom__box--icon">
                  <i class={`${item.icon}`}></i>
                </div>
                <div class="contact__bottom__box--text">
                  <div class="contact__bottom__box--title">{item.name_box}</div>

                  <div
                    class="contact__bottom__box--content contact__phone"
                    id="contact__phone"
                  >
                    {string.includes(substring) && item.subtitle}{" "}
                    {item.value_box}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <button id="save-btn" onClick={onNav}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Demo;
