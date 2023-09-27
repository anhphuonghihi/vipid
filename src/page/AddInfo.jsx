import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteInfo, getInfosByUser } from "../redux/slice/infoSlice";

import AddShow from "../components/AddShow";
import GoBack from "../components/GoBack";
import AddBox from "../components/AddBox";
import info__add from "../data/info__list__add.json";
export default function AddInfo() {
  const len = info__add.length;
  return (
    <>
      <GoBack title="Thêm thông tin liên hệ" />
      <h2 className="add__info">Thêm thông tin liên hệ</h2>
      {info__add &&
        info__add.map((item, index) => (
          <AddBox item={item} key={index} index={index + 1} len={len} />
        ))}
      <AddShow />
    </>
  );
}
