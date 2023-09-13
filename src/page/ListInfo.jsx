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
import HeaderAuth from "../components/HeaderAuth";
import { getInfosByUser } from "../redux/slice/infoSlice";

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

  useEffect(() => {
    dispatch(getContactsByUser(1));
    // dispatch(getInfosByUser(1));
  }, []);
  if (loading) {
    return <LinearProgress color="success" />;
  }
  const len = userContacts?.boxs?.length;
  //local
  var infoData = JSON.parse(localStorage.getItem("infoData"));
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
