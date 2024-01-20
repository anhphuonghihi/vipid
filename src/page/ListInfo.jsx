import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../API";
import Box from "../components/Box";

import Avatar from "../components/Avatar";
import AddShow from "../components/AddShow";
import HeaderAuth from "../components/HeaderAuth";
import { LinearProgress } from "@mui/material";
export default function ListInfo() {
  const authUser = useSelector((state) => state.auth.user);
  const { userContacts, loading } = useSelector((state) => ({
    ...state.contact,
  }));
  const { userInfos } = useSelector((state) => ({
    ...state.info,
  }));
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const listContact = async () => {
      const response = await API.get(`/listcontact/`);
      setUserData(response.data.data.data[2]);
    };
    listContact();
  }, [dispatch]);
  if (loading) {
    return <LinearProgress color="success" />;
  }
  const editName = (id) => {
    if (id) {
      navigate(`/info/${id}`);
    }
  };
  console.log(userData);
  return (
    <>
      <HeaderAuth authUser={authUser} />
      <Avatar avatar={userContacts.anh} />
      {/* <div className="list__info">
        {userData &&
          Object.keys(userData).map((item, index) => (
            <Box item={item} key={index} index={index + 1}  />
          ))}
      </div> */}
      <AddShow />
    </>
  );
}
