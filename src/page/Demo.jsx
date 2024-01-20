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
    navigate("/");
  };
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://191.96.31.204:1337/listcontact/${username}`,
        {
          headers: {
            "x-api-key":
              "z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232",
          },
        }
      );
      console.log(response);
      setUserInfo(response.data.data.data);
    };
    getData();
  }, [username]);
  console.log(userInfo);
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
        />
        <BoxDemo
          icon="fa-solid fa-building"
          label="Tên công ty"
          name={userInfo?.hovaten}
        />
        <BoxDemo
          icon="fa-solid fa-briefcase"
          label="Vị trí"
          name={userInfo?.vitri}
        />
        <BoxDemo
          icon="fa-solid fa-map-location-dot"
          label="Địa chỉ"
          name={userInfo?.diachi}
        />
        <BoxDemo
          icon="fa-solid fa-user-secret"
          label="Dịch vụ"
          name={userInfo?.dichvu}
        />
        <BoxDemo
          icon="fa-solid fa-envelope"
          label="Email"
          name={userInfo?.email}
        />
        <BoxDemo
          icon="fa-solid fa-link"
          label="Đường dẫn mạng xã hội"
          name={userInfo?.duongdanmangxahoi}
        />
        <BoxDemo
          icon="fa-solid fa-share-nodes"
          label="Mạng xã hội"
          name={userInfo?.mangxahoi}
        />
        <BoxDemo
          icon="fa-solid fa-phone"
          label="Số điện thoại"
          name={userInfo?.sodienthoai}
        />
        <BoxDemo
          icon="fa-solid fa-building-columns"
          label="Loại ngân hàng"
          name={userInfo?.loainganhang}
        />
        <BoxDemo
          icon="fa-solid fa-building-columns"
          label="Tài khoản ngân hàng"
          name={userInfo?.taikhoannganhang}
        />
        <BoxDemo
          icon="fa-solid fa-earth-americas"
          label="Website"
          name={userInfo?.website}
        />
      </div>
      <button id="save-btn" onClick={onNav}>
        <FontAwesomeIcon icon="fa-solid fa-plus" />
      </button>
    </div>
  );
};

export default Demo;
