import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContactsByUser } from "../redux/slice/contactSlice";

import { toast } from "react-toastify";
import { LinearProgress } from "@mui/material";
import Box from "../components/Box";
import ContactTitle from "../components/ContactTitle";
import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import HeaderAuth from "../components/HeaderAuth";
import { getInfosByUser } from "../redux/slice/infoSlice";
import info__list__data from "../data/info__list.json";
export default function ListInfo() {
  const authUser = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userContacts, loading } = useSelector((state) => ({
    ...state.contact,
  }));
  const { userInfos } = useSelector((state) => ({
    ...state.info,
  }));
  const dispatch = useDispatch();
  const newinfoData = JSON.parse(localStorage.getItem("infoData"));
  var [infoData, setData] = useState(newinfoData);
  console.log(infoData);
  useEffect(() => {
    dispatch(getContactsByUser(1));
    // dispatch(getInfosByUser(1));
    if (infoData == null) {
      localStorage.setItem(
        "infoData",
        JSON.stringify(info__list__data["boxs"])
      );
      const newinfoData = JSON.parse(localStorage.getItem("infoData"));
      setData(newinfoData);
    }
  }, []);
  if (loading) {
    return <LinearProgress color="success" />;
  }
  const len = userContacts?.boxs?.length;
  //local

  return (
    <>
      <HeaderAuth authUser={authUser} />
      <Avatar avatar={userContacts.img} />
      <ContactTitle
        name={userContacts.name}
        position={userContacts.position}
        cty={userContacts.cty}
      />
      {/* local */}
      <div class="list__info">
        {infoData &&
          infoData.map((item, index) => (
            <Box item={item} key={index} index={index + 1} len={len} />
          ))}
      </div>
      <AddShow />
    </>
  );
}
