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
  const navigate = useNavigate();
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  }, [dispatch]);

  const handleEdit = (e, { fullname }) => {
    e.preventDefault();
    setTimeout(function () {
      navigate("/");
    }, 1000);
    dispatch(updateContact(fullname));
    dispatch(getContactsByUser());
  };
  const [input, setInput] = useState(userContacts.display_name);
  const handleInput = (e) => setInput(e.target.value);
  return (
    <div>
      <form>
        <GoBack title={`Sửa họ tên`} />
        <HeaderEdit title="Tên" subtitle="Mô tả tên" />
        <EditInput
          handleChange={handleInput}
          values={input}
          name="name"
          label="Họ tên"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={(e) =>
            handleEdit(e, {
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
