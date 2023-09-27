import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import info__add from "../data/info__list__add.json";
import info__list from "../data/info__list.json";
import { createInfo, getInfosByUser } from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Button } from "@mui/material";
import AddInput from "../components/AddInput";
import AddSelect from "../components/AddSelect";
import { getContactsByUser } from "../redux/slice/contactSlice";
const AddInfoId = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [infoData, setInfoData] = useState();
  const [contactData, setContactData] = useState();
  const [dataSelect, setDataSelect] = useState();
  useEffect(() => {
    if (id) {
      const singleInfo = info__add?.find((info) => info.id === id);
      setInfoData({ ...singleInfo });
      const singleContact = info__list?.find((contact) => contact.id === id);
      setContactData({ ...singleContact });
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
  useEffect(() => {
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  }, [dispatch]);
  const { userContacts } = useSelector((state) => ({
    ...state.contact,
  }));
  console.log("userContacts" + userContacts.ID);
  const handleEdit = ({
    id,
    icon,
    back__title,
    title,
    name_box,
    subtitle,
    value_box,
  }) => {
    const data = {
      contact__id: id,
      back__title,
      title,
      subtitle,
      icon,
      name_box,
      value_box,
      user__id: userContacts.ID,
    };
    dispatch(createInfo({ data }));
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
    navigate("/");
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [select1, setSelect1] = useState("");
  const handleInput1 = (e) => setInput1(e.target.value);
  const handleInput2 = (e) => setInput2(e.target.value);
  const handleSelect1 = (e) => setSelect1(e.target.value);
  const handleSocialNetwork = ({
    id,
    icon,
    back__title,
    title,
    name_box,
    subtitle,
    value_box,
  }) => {
    const data = {
      contact__id: id,
      back__title,
      title,
      subtitle,
      icon,
      name_box,
      value_box,
      user__id: userContacts.ID,
    };
    dispatch(createInfo({ data }));
    navigate("/");
    dispatch(getContactsByUser());
    dispatch(getInfosByUser());
  };
  console.log("infoData?.id" + infoData?.id);
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
            lab="Mạng xã hội"
          />
          <AddInput
            handleChange={handleInput1}
            values={input1}
            name={id}
            lab="Tên mạng xã hội"
          />
          <AddInput
            handleChange={handleInput2}
            values={input2}
            name={id}
            lab="Đường dẫn"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={() =>
              handleSocialNetwork({
                id: select1,
                icon: `fa-brands fa-${select1}`,
                back__title: "mạng xã hội",
                title: "Mạng xã hội",
                name_box: input1,
                subtitle: select1,
                value_box: input2,
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
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={() =>
              handleEdit({
                id: id,
                icon: contactData?.icon,
                back__title: contactData?.back__title,
                title: contactData?.title,
                name_box: contactData?.name_box,
                subtitle: select1,
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
