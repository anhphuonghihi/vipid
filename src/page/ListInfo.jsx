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

export default function ListInfo() {
  const authUser = useSelector((state) => state.auth.user);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userContacts, loading } = useSelector((state) => ({
    ...state.contact,
  }));
  console.log(userContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsByUser(1));
  }, []);
  if (loading) {
    return <LinearProgress color="success" />;
  }
  const len = userContacts?.boxs?.length;
  return (
    <>
      <HeaderAuth authUser={authUser} />
      <Avatar avatar={userContacts.img} />
      <ContactTitle
        name={userContacts.name}
        position={userContacts.position}
        cty={userContacts.cty}
      />
      {userContacts.boxs &&
        userContacts.boxs.map((item, index) => (
          <Box item={item} key={index} index={index + 1} len={len} />
        ))}
      <AddShow />
    </>
  );
}
