import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import info__add from "../data/info__list__add.json";
import { createInfo } from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
import AddInput from "../components/AddInput";
import AddSelect from "../components/AddSelect";
const AddInfoId = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [infoData, setInfoData] = useState();
  const [dataSelect, setDataSelect] = useState();
  useEffect(() => {
    if (id) {
      const singleInfo = info__add?.find((info) => info.id === id);
      setInfoData({ ...singleInfo });
      // dispatch(getInfosByUser(1));
      if (singleInfo?.id === "phone") {
        const data = ["Số điện nơi làm việc", "Số điện cá nhân"];
        setDataSelect(data);
      }
      if (singleInfo?.id === "dia-chi") {
        const data = ["Địa chỉ làm việc", "Địa chỉ nhà"];
        setDataSelect(data);
      }
      if (singleInfo?.id === "tk-ngan-hang") {
        const data = ["BIDV", "ZaloPay"];
        setDataSelect(data);
      }
      if (singleInfo?.id === "mxh") {
        const data = ["tiktok", "facebook"];
        setDataSelect(data);
      }
    }
  }, [id, info__add]);

  const handleEdit = ({ name_box, value_box, icon, id }) => {
    const createInfotData = { id, name_box, value_box, icon };
    dispatch(createInfo({ createInfotData }));
    navigate("/");
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [select1, setSelect1] = useState("");
  const handleInput1 = (e) => setInput1(e.target.value);
  const handleInput2 = (e) => setInput2(e.target.value);
  const handleSelect1 = (e) => setSelect1(e.target.value);
  const handleSocialNetwork = ({
    name_box,
    value_box,
    icon,
    id,
    social_network,
  }) => {
    const createInfotData = { id, name_box, value_box, icon, social_network };
    dispatch(createInfo({ createInfotData }));
    navigate("/");
  };
  return (
    <form>
      <GoBack title={`Thêm ${infoData?.back__title}`} />
      <HeaderEdit title={infoData?.title} subtitle={infoData?.subtitle} />
      {infoData?.id === "mxh" ? (
        <>
          <AddSelect
            handleChange={handleSelect1}
            values={select1}
            name={id}
            dataSelect={dataSelect}
          />
          <AddInput handleChange={handleInput1} values={input1} name={id} />
          <AddInput handleChange={handleInput2} values={input2} name={id} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={() =>
              handleSocialNetwork({
                id: select1,
                icon: infoData?.icon,
                name_box: input1,
                value_box: input2,
                social_network: true,
              })
            }
          >
            Thêm
          </Button>
        </>
      ) : (
        <>
          {(infoData?.id === "phone" ||
            infoData?.id === "dia-chi" ||
            infoData?.id === "tk-ngan-hang") && (
            <>
              <AddInput handleChange={handleInput1} values={input1} name={id} />
              <AddSelect
                handleChange={handleSelect1}
                values={select1}
                name={id}
                dataSelect={dataSelect}
              />
            </>
          )}

          {(infoData?.id === "dich-vu" ||
            infoData?.id === "email" ||
            infoData?.id === "website") && (
            <>
              <AddInput handleChange={handleInput1} values={input1} name={id} />
            </>
          )}
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
                value_box: input1,
              })
            }
          >
            Thêm
          </Button>
        </>
      )}
    </form>
  );
};

export default AddInfoId;