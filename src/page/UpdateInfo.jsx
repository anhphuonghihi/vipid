import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import EditContainer from "../components/EditContainer";
import { getContactsByUser } from "../redux/slice/contactSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
const UpdateInfo = () => {
  let { id } = useParams();
  console.log(id);
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  const dispatch = useDispatch();
  console.log(userContacts.boxs);
  const [contactData, setContactData] = useState();
  useEffect(() => {
    dispatch(getContactsByUser(1));
  }, []);
  useEffect(() => {
    if (id) {
      const singleContact = userContacts?.boxs?.find(
        (contact) => contact.id === id
      );
      console.log("singleContact" + singleContact);
      setContactData({ ...singleContact });
    }
  }, [id, userContacts]);

  console.log(userContacts.boxs);
  return (
    <div>
      <GoBack title={`Sửa ${contactData?.name_box}`} />
      <HeaderEdit title="Dịch vụ ban cung cấp là" subtitle="......" />
      <EditContainer />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
        Đăng nhập
      </Button>
    </div>
  );
};

export default UpdateInfo;
