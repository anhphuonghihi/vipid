import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteInfo, getInfosByUser } from "../redux/slice/infoSlice";

import AddShow from "../components/AddShow";
import GoBack from "../components/GoBack";
import Box from "../components/Box";
import info__add from "../data/info__list__add.json";
export default function AddInfo() {
  const len = info__add.length;
  return (
    <>
      <GoBack title="Thêm thông tin liên hệ" />
      <h2 className="add__info">Thêm thông tin liên hệ</h2>
      <Box icon="fa-solid fa-user" label="Họ và tên" name="response_data_hovaten" add="Thêm họ tên"/>
      <Box icon="fa-solid fa-building" label="Tên công ty"  name="response_data_tencongty"  add="Thêm tên công ty"/>
      <Box icon="fa-solid fa-briefcase" label="Vị trí"  name="response_data_vitri"  add="Thêm vị trí"/>
      <Box icon="fa-solid fa-map-location-dot" label="Địa chỉ"  name="response_data_diachi"  add="Thêm địa chỉ"/>
      <Box icon="fa-solid fa-user-secret" label="Dịch vụ"  name="response_data_dichvu"  add="Thêm dịch vụ"/>
      <Box icon="fa-solid fa-envelope" label="Email"  name="response_data_email"  add="Thêm email"/>
      <Box icon="fa-solid fa-link" label="Đường dẫn mạng xã hội"  name="response_data_duongdanmangxahoi"  add="Thêm đường dẫn mạng xã hội"/>
      <Box icon="fa-solid fa-share-nodes" label="Mạng xã hội"  name="response_data_mangxahoi"  add="Thêm mạng xã hội"/>
      <Box icon="fa-solid fa-phone" label="Số điện thoại"  name="response_data_sodienthoai"  add="Thêm số điện thoại"/>
      <Box icon="fa-solid fa-building-columns" label="Loại ngân hàng"  name="response_data_loainganhang"  add="Thêm loại ngân hàng"/>
      <Box icon="fa-solid fa-building-columns" label="Tài khoản ngân hàng"  name="response_data_taikhoannganhang"  add="Thêm tài khoản ngân hàng"/>
      <Box icon="fa-solid fa-earth-americas" label="Website"  name="response_data_website"  add="Thêm địa chỉ website"/>
      <AddShow />
    </>
  );
}
