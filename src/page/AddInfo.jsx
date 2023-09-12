import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContactsByUser } from "../redux/slice/contactSlice";

import { toast } from "react-toastify";
import { LinearProgress } from "@mui/material";
import Box from "../components/Box";
import ContactTitle from "../components/ContactTitle";
import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import GoBack from "../components/GoBack";
import AddBox  from "../components/AddBox";

export default function AddInfo() {
  const contact__add = [
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Số điện thoại",
      value_box: "Thêm số điện thoại",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Email",
      value_box: "Thêm thư điện tử",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Địa chỉ",
      value_box: "Thêm địa chỉ",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "website",
      value_box: "Thêm URL WEBSITE",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Dịch vụ",
      value_box: "Thêm dịch vụ bạn cung cấp",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Mạng xã hội",
      value_box: "Thêm mạng xã hội",
    },
    {
      id: "phone",
      icon: "fa-solid fa-phone",
      name_box: "Tài khoản ngân hàng",
      value_box: "Thêm tài khoản ngân hàng",
    },
  ];
  const len = contact__add.length;
  return (
    <>
      <GoBack title="Thêm thông tin liên hệ" />
      <h2 class="add__contact">Thêm thông tin liên hệ</h2>
      {contact__add &&
        contact__add.map((item, index) => (
          <AddBox item={item} key={index} index={index + 1} len={len} />
        ))}
      <AddShow />
    </>
  );
}
