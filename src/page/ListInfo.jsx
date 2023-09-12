import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContactsByUser } from "../redux/slice/contactSlice";

import { toast } from "react-toastify";
import { LinearProgress } from "@mui/material";
import Box from "../components/Box";
import ContactTitle from "../components/ContactTitle";
import Avatar from "../components/Avatar";

export default function ListInfo() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userContacts, loading } = useSelector((state) => ({
    ...state.contact,
  }));

  if (loading) {
    return <LinearProgress color="success" />;
  }

  return (
    <>
      <Avatar />
      <ContactTitle />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </>
  );
}
