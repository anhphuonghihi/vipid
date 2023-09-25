import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteContact, getContactsByUser } from "../redux/slice/contactSlice";

import { toast } from "react-toastify";
import { LinearProgress } from "@mui/material";
import Box from "../components/Box";
import ContactTitle from "../components/ContactTitle";
import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import HeaderAuth from "../components/HeaderAuth";
import { getInfosByUser } from "../redux/slice/infoSlice";
export default function ListInfo() {
  const authUser = useSelector((state) => state.auth.user);
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  const { userInfos } = useSelector((state) => ({
    ...state.info,
  }));
  console.log(userInfos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  }, [dispatch]);


  const editName = (id) => {
    if (id) {
      navigate(`/info/${id}`);
    }
  };
  const len = userContacts?.boxs?.length;

  return (
    <>
      <HeaderAuth authUser={authUser} />
      <Avatar avatar={userContacts.img} />
      <div onClick={() => editName("name")} class={`contact__bottom__box name`}>
        <div class="contact__bottom__box--icon">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="contact__bottom__box--text">
          <div class="contact__bottom__box--title">Họ tên</div>
          <div
            class="contact__bottom__box--content contact__phone"
            id="contact__phone"
          >
            {userContacts.name}
          </div>
        </div>
      </div>
      <div class="list__info">
        {userInfos.data &&
          userInfos.data.map((item, index) => (
            <Box item={item} key={index} index={index + 1} len={len} />
          ))}
      </div>
      <AddShow />
    </>
  );
}
