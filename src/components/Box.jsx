import React from "react";
import { useNavigate } from "react-router-dom";
const Box = ({ item, index, len }) => {
  const navigate = useNavigate();
  const editInfo = (id) => {
    navigate(`/info/${id}`);
  };
  return (
    <div
      onClick={() => editInfo(item.id)}
      class={`contact__bottom__box ${`${len === index && "last"} ${item.id}`}` }
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

export default Box;
