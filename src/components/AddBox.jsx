import React from "react";
import { useNavigate } from "react-router-dom";
const AddBox = ({ item, index, len }) => {
  console.log("item.id" + item.id);
  const navigate = useNavigate();
  const addInfo = (id) => {
    navigate(`/info/add/${id}`);
  };
  return (
    <div
      onClick={() => addInfo(item.id)}
      class={`contact__bottom__box ${len === index && "last"}`}
    >
      <div class="contact__bottom__box--icon">
        <i class={`${item.icon}`}></i>
      </div>
      <div class="contact__bottom__box--text">
        <div class="contact__bottom__box--title">{item.name_box}</div>
        <div
          class="contact__bottom__box--content contact__phone"
          id="contact__phone"
        >
          {item.value_box}
        </div>
      </div>
    </div>
  );
};

export default AddBox;
