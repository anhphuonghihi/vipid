import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import LogoAvatar from "../asset/img/avatar.png";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
      const response = await axios.get(
        `https://hcsoftvn.com/wp-json/wp2023/v1/profile/public?user_login=${username}`
      );

      setUserInfo(response.data.user);
      setUserContact(response.data.contact);

      userInfo && seTheme(userInfo[0]?.user_nicename);
    };
    getData();
  }, [username]);
  const len = userContact?.length;

  return (
    <div className={`layout__container ${theme ? theme : "theme-dark"}`}>
      <div className="background"></div>
      <div className="background__img demo"></div>
      <div className="logo__avatar">
        <div>
          <img
            src={
              userInfo && userInfo[0]?.user_activation_key
                ? userInfo[0]?.user_activation_key
                : LogoAvatar
            }
            alt="Logo"
          />
        </div>
      </div>
      <div class={`contact__bottom__box name`}>
        <div className="contact__bottom__box--icon">
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
        <div className="contact__bottom__box--text">
          <div className="contact__bottom__box--title">Họ tên</div>
          <div
            className="contact__bottom__box--content contact__phone"
            id="contact__phone"
          >
            {userInfo ? userInfo[0]?.display_name : "Demo"}
          </div>
        </div>
      </div>

      <div className="list__info">
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
                <div className="contact__bottom__box--icon">
                  <FontAwesomeIcon icon={`${item.icon}`} />
                </div>
                <div className="contact__bottom__box--text">
                  <div className="contact__bottom__box--title">
                    {item.name_box}
                  </div>

                  <div
                    className="contact__bottom__box--content contact__phone"
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
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
  );
};

export default Demo;
