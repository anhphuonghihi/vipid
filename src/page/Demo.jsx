import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import LogoAvatar from "../asset/img/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BoxDemo from "../components/BoxDemo";
import { Helmet } from "react-helmet";
const Demo = () => {
  let { username } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const onNav = () => {
    const hovaten = document.getElementById("hovaten")?.innerText;
    const tencongty = document.getElementById("tencongty")?.innerText;
    const vitri = document.getElementById("vitri")?.innerText;
    const diachi = document.getElementById("diachi")?.innerText;
    const dichvu = document.getElementById("dichvu")?.innerText;
    const email = document.getElementById("email")?.innerText;
    const mangxahoi = document.getElementById("mangxahoi")?.innerText;
    const duongdanmangxahoi =
      document.getElementById("duongdanmangxahoi")?.innerText;
    const contact_img = "/9j/4AAQSkZJRgABAQAAAQABAAD/";
    const sodienthoai = document.getElementById("sodienthoai")?.innerText;
    const loainganhang = document.getElementById("loainganhang")?.innerText;
    const taikhoannganhang =
      document.getElementById("taikhoannganhang")?.innerText;
    const website = document.getElementById("website")?.innerText;
    // create a vcard file
    const makeVCardVersion = () => `VERSION:3.0`;
    const makeVCardInfo = (info) => `N:${info}`;
    const makeVCardName = (name) => `FN:${name}`;
    const makeVCardOrg = (org) => `ORG:${org}`;
    const makeVCardTitle = (title) => `TITLE:${title}`;
    const makeVCardPhoto = (img) => `PHOTO;TYPE=JPEG;ENCODING=b:${img}`;
    const makeVCardTel = (phone) => `TEL;TYPE=WORK,VOICE:${phone}`;
    const makeVCardAdrwork = (address_work) =>
      `ADR;TYPE=work:;;${address_work}`;
    const makeVCardEmail = (email) => `EMAIL:${email}`;
    const makeVCardURL = (url) => `URL:${url}`;
    const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;
    const vcard = `BEGIN:VCARD
    \n${makeVCardVersion()}
    \n${makeVCardInfo(hovaten)}
    \n${makeVCardName(hovaten)}
    \n${makeVCardOrg(tencongty)}
    \n${makeVCardTitle(vitri)}
    \n${makeVCardPhoto(contact_img)}
    \n${makeVCardTel(sodienthoai)}
    \n${makeVCardAdrwork(diachi)}
    \n${makeVCardEmail(email)}
    \n${makeVCardURL(website)}
    \n${makeVCardTimeStamp()}
    \nEND:VCARD`;
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement("a");
    newLink.download = hovaten + ".vcf";
    newLink.textContent = hovaten;
    newLink.href = url;

    newLink.click();
  };
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://191.96.31.204:1337/listcontact/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key":
              "z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232",
          },
        }
      );

      setUserInfo(response.data.data.data);
    };
    getData();
  }, [username]);

  return (
    <div className={`layout__container theme-dark`}>
      <Helmet>
        <title>{userInfo?.hovaten}</title>
      </Helmet>
      <div className="background"></div>
      <div className="background__img demo"></div>
      <div className="logo__avatar">
        <div>
          <img
            src={userInfo && userInfo?.anh ? userInfo?.anh : LogoAvatar}
            alt="Logo"
          />
        </div>
      </div>

      <div className="list__info">
        <BoxDemo
          icon="fa-solid fa-user"
          label="Họ và tên"
          name={userInfo?.hovaten}
          class_name="hovaten"
        />
        <BoxDemo
          icon="fa-solid fa-building"
          label="Tên công ty"
          name={userInfo?.tencongty}
          class_name="tencongty"
        />
        <BoxDemo
          icon="fa-solid fa-briefcase"
          label="Vị trí"
          name={userInfo?.vitri}
          class_name="vitri"
        />
        <BoxDemo
          icon="fa-solid fa-map-location-dot"
          label="Địa chỉ"
          name={userInfo?.diachi}
          class_name="diachi"
        />
        <BoxDemo
          icon="fa-solid fa-user-secret"
          label="Dịch vụ"
          name={userInfo?.dichvu}
          class_name="dichvu"
        />
        <BoxDemo
          icon="fa-solid fa-envelope"
          label="Email"
          name={userInfo?.email}
          class_name="email"
        />
        <BoxDemo
          icon="fa-solid fa-link"
          label="Đường dẫn mạng xã hội"
          name={userInfo?.duongdanmangxahoi}
          class_name="duongdanmangxahoi"
        />
        <BoxDemo
          icon="fa-solid fa-share-nodes"
          label="Mạng xã hội"
          name={userInfo?.mangxahoi}
          class_name="mangxahoi"
        />
        <BoxDemo
          icon="fa-solid fa-phone"
          label="Số điện thoại"
          name={userInfo?.sodienthoai}
          class_name="sodienthoai"
        />
        <BoxDemo
          icon="fa-solid fa-building-columns"
          label="Loại ngân hàng"
          name={userInfo?.loainganhang}
          class_name="loainganhang"
        />
        <BoxDemo
          icon="fa-solid fa-building-columns"
          label="Tài khoản ngân hàng"
          name={userInfo?.taikhoannganhang}
          class_name="taikhoannganhang"
        />
        <BoxDemo
          icon="fa-solid fa-earth-americas"
          label="Website"
          name={userInfo?.website}
          class_name="website"
        />
      </div>
      <button id="save-btn" onClick={onNav}>
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
  );
};

export default Demo;
