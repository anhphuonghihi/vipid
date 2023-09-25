import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";

import { getInfosByUser, updateInfo } from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
import EditInput from "../components/EditInput";
import { getContactsByUser, updateContact } from "../redux/slice/contactSlice";
const UpdateInfoName = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  console.log(userContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  }, [dispatch]);

  const handleEdit = ({ fullname }) => {
    console.log("value" + fullname);
    dispatch(updateContact(fullname));
    dispatch(getContactsByUser());
    setTimeout(function () {
      navigate("/");
    }, 500);
  };
  const [input, setInput] = useState(userContacts.user_nicename);
  const handleInput = (e) => setInput(e.target.value);
  return (
    <div>
      <form>
        <GoBack title={`Sửa họ tên`} />
        <HeaderEdit title="Tên" subtitle="Mô tả tên" />
        <EditInput
          handleChange={handleInput}
          values={input}
          name={id}
          label="Họ tên"
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={() =>
            handleEdit({
              fullname: input,
            })
          }
        >
          Lưu thông tin
        </Button>
      </form>
    </div>
  );
};

export default UpdateInfoName;
