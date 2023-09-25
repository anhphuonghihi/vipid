import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getContactsByUser } from "../redux/slice/contactSlice";

import Box from "../components/Box";

import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import HeaderAuth from "../components/HeaderAuth";
import { getInfosByUser } from "../redux/slice/infoSlice";
export default function ListInfo() {
  const authUser = useSelector((state) => state.auth.user);
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  console.log(userContacts);
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
      <Avatar avatar={userContacts.user_url} />
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
            {userContacts.user_nicename}
          </div>
        </div>
      </div>
      <div class="list__info">
        {userInfos &&
          userInfos.map((item, index) => (
            <Box item={item} key={index} index={index + 1} len={len} />
          ))}
      </div>
      <AddShow />
    </>
  );
}
