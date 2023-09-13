import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import EditContainer from "../components/EditContainer";
import { deleteInfo, getInfosByUser } from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
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
      const singleInfo = userInfos?.find((info) => info.id === id);
      setInfoData({ ...singleInfo });
    }
  }, [id, userInfos]);
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteInfo({ id }));
    navigate("/");
  };
  return (
    <div>
      <GoBack title={`Sửa ${infoData?.name_box}`} />
      <HeaderEdit title="Dịch vụ ban cung cấp là" subtitle="......" />
      <EditContainer />
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => handleDelete(id)}
      >
        Xóa
      </Button>
    </div>
  );
};

export default UpdateInfo;
