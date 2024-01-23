import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import API from "../API";
import Box from "../components/Box";

import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import HeaderAuth from "../components/HeaderAuth";

import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ListInfo() {
  const [anh, setAnh] = useLocalStorage("response_data_anh");
  const [diachi, setDiachi] = useLocalStorage("response_data_diachi");
  const [dichvu, setDichvu] = useLocalStorage("response_data_dichvu");
  const [duongdanmangxahoi, setDuongdanmangxahoi] = useLocalStorage(
    "response_data_duongdanmangxahoi"
  );
  const [email, setEmail] = useLocalStorage("response_data_email");
  const [hovaten, setHovaten] = useLocalStorage("response_data_hovaten");
  const [loainganhang, setLoainganhang] = useLocalStorage(
    "response_data_loainganhang"
  );
  const [mangxahoi, setMangxahoi] = useLocalStorage("response_data_mangxahoi");
  const [sodienthoai, setSodienthoai] = useLocalStorage(
    "response_data_sodienthoai"
  );
  const [taikhoannganhang, setTaikhoannganhang] = useLocalStorage(
    "response_data_taikhoannganhang"
  );
  const [tencongty, setTencongty] = useLocalStorage("response_data_tencongty");
  const [vitri, setVitri] = useLocalStorage("response_data_vitri");
  const [website, setWebsite] = useLocalStorage("response_data_website");
  const token = useReadLocalStorage("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, []);

  const editInfo = (id) => {
    navigate(`/info/${id}`);
  };

  return (
    <>
      <HeaderAuth />
      <Avatar avatar={anh} setAnh={setAnh} />
      <Box
        icon="fa-solid fa-user"
        label="Họ và tên"
        name="response_data_hovaten"
      />
      <Box
        icon="fa-solid fa-building"
        label="Tên công ty"
        name="response_data_tencongty"
      />
      <Box
        icon="fa-solid fa-briefcase"
        label="Vị trí"
        name="response_data_vitri"
      />
      <Box
        icon="fa-solid fa-map-location-dot"
        label="Địa chỉ"
        name="response_data_diachi"
      />
      <Box
        icon="fa-solid fa-user-secret"
        label="Dịch vụ"
        name="response_data_dichvu"
      />
      <Box
        icon="fa-solid fa-envelope"
        label="Email"
        name="response_data_email"
      />
      <Box
        icon="fa-solid fa-link"
        label="Đường dẫn mạng xã hội"
        name="response_data_duongdanmangxahoi"
      />
      <Box
        icon="fa-solid fa-share-nodes"
        label="Mạng xã hội"
        name="response_data_mangxahoi"
      />
      <Box
        icon="fa-solid fa-phone"
        label="Số điện thoại"
        name="response_data_sodienthoai"
      />
      <Box
        icon="fa-solid fa-building-columns"
        label="Loại ngân hàng"
        name="response_data_loainganhang"
      />
      <Box
        icon="fa-solid fa-building-columns"
        label="Tài khoản ngân hàng"
        name="response_data_taikhoannganhang"
      />
      <Box
        icon="fa-solid fa-earth-americas"
        label="Website"
        name="response_data_website"
      />
      <AddShow />
    </>
  );
}
