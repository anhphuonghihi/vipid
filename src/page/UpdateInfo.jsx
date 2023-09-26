import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import {
  deleteInfo,
  getInfosByUser,
  updateInfo,
} from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
import EditInput from "../components/EditInput";
import { getContactsByUser } from "../redux/slice/contactSlice";
const UpdateInfo = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { userInfos } = useSelector((state) => ({
    ...state.info,
  }));
  const dispatch = useDispatch();
  const [infoData, setInfoData] = useState();
  useEffect(() => {
    dispatch(getInfosByUser());
  }, []);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (id) {
      const singleInfo = userInfos.find((info) => info.contact__id === id);
      setInfoData({ ...singleInfo });
      setInput(singleInfo["value_box"]);
    }
  }, [id, userInfos]);
  const handleDelete = (id) => {
    dispatch(deleteInfo({ id }));
    setTimeout(function () {
      navigate("/");
    }, 1000);
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());

  };
  const handleEdit = (e, { id, value_box }) => {
    e.preventDefault();
    dispatch(updateInfo({ id, value_box }));
    setTimeout(function () {
      navigate("/");
    }, 1000);
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());

  };

  const handleInput = (e) => setInput(e.target.value);
  return (
    <div>
      <form>
        <GoBack title={`Sửa ${infoData?.back__title}`} />
        <HeaderEdit title={infoData?.title} subtitle={infoData?.subtitle} />
        <EditInput
          handleChange={handleInput}
          values={input}
          name={infoData?.contact__id}
          label={infoData?.title}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={(e) =>
            handleEdit(e, {
              id: infoData?.id,
              value_box: input,
            })
          }
        >
          Lưu thông tin
        </Button>
        {!(
          infoData?.contact__id === "position" ||
          infoData?.contact__id === "cty"
        ) && (
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={() => handleDelete(infoData?.id)}
          >
            Xóa
          </Button>
        )}
      </form>
    </div>
  );
};

export default UpdateInfo;
