import React from "react";
import { useNavigate } from "react-router-dom";
const Box = ({ item, index, len, none__link }) => {
  console.log(item);
  const navigate = useNavigate();
  const editInfo = (id) => {
    if (none__link) {
    } else {
      navigate(`/info/${id}`);
    }
  };
  return (
    <div
      onClick={() => editInfo(item.contact__id)}
      class={`contact__bottom__box ${`${len === index && "last"} ${item.id}`}`}
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
