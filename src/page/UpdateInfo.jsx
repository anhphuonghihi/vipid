import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import EditContainer from "../components/EditContainer";
import info__add from "../data/info__list.json";
import {
  deleteInfo,
  getInfosByUser,
  updateInfo,
} from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
import EditInput from "../components/EditInput";
const UpdateInfo = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { userInfos } = useSelector((state) => ({
    ...state.info,
  }));
  const dispatch = useDispatch();
  const [infoData, setInfoData] = useState();
  useEffect(() => {
    // dispatch(getInfosByUser(1));
  }, []);
  useEffect(() => {
    if (id) {
      const singleInfo = info__add["boxs"]?.find((info) => info.id === id);
      setInfoData({ ...singleInfo });
    }
  }, [id, userInfos]);
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteInfo({ id }));
    navigate("/");
  };
  console.log(infoData);
  const handleEdit = ({ id, name_box, value_box, icon }) => {
    const updatedInfoData = { id, name_box, value_box, icon };
    console.log("value_box" + value_box);
    dispatch(updateInfo({ id, updatedInfoData }));
    navigate("/");
  };
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  return (
    <div>
      <form>
      <GoBack title={`Sửa ${infoData?.back__title}`} />
      <HeaderEdit title={infoData?.title} subtitle={infoData?.subtitle} />
      <EditInput
        handleChange={handleInput}
        values={input}
        name={id}
        label={infoData?.title}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={() =>
          handleEdit({
            id: infoData?.id,
            icon: infoData?.icon,
            name_box: infoData?.name_box,
            value_box: input,
          })
        }
      >
        Lưu thông tin
      </Button>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => handleDelete(id)}
      >
        Xóa
      </Button>
      </form>
    </div>
  );
};

export default UpdateInfo;
