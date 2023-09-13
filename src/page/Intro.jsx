import React from "react";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";
import AddShow from "../components/AddShow";
import Box from "../components/Box";
import HeaderAuth from "../components/HeaderAuth";

import ContactTitle from "../components/ContactTitle";
import { useSelector } from "react-redux";
import userContacts from "../data/contact__list.json";
import infoData from "../data/info__list.json";
import Avatar from "../components/Avatar";
import { useNavigate } from "react-router-dom";
const Intro = ({ handleDemo }) => {
  const len = userContacts?.boxs?.length;
  const navigate = useNavigate();
  const onNav = () => {
    navigate("/login");
  };
  return (
    <div onClick={handleDemo ? handleDemo : onNav} className="login__cup">
      <div className="layout__container">
        <div class="background"></div>
        <div class="background__img"></div>
        <>
          <Avatar avatar={userContacts["contact"][0].img} />
          <ContactTitle
            name={userContacts["contact"][0].name}
            position={userContacts["contact"][0].position}
            cty={userContacts["contact"][0].cty}
          />

          <div class="list__info">
            {infoData.boxs &&
              infoData.boxs.map((item, index) => (
                <Box
                  item={item}
                  key={index}
                  index={index + 1}
                  len={len}
                  none__link
                />
              ))}
          </div>
          <button id="save-btn">
            <i class="fa-solid fa-plus"></i>
          </button>
        </>
      </div>
    </div>
  );
};

export default Intro;
