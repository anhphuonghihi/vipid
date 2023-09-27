import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
const Box = ({ item, index, len, none__link }) => {
  const navigate = useNavigate();
  const editInfo = (id) => {
    if (none__link) {
    } else {
      navigate(`/info/${id}`);
    }
  };
  const string = item.contact__id;
  const substring = "tk";

  return (
    <div
      onClick={() => editInfo(item.contact__id)}
      class={`contact__bottom__box ${`${len === index && "last"} ${item.id}`}`}
    >
      <div className="contact__bottom__box--icon">
        <FontAwesomeIcon icon={`${item.icon}`} />
      </div>
      <div className="contact__bottom__box--text">
        <div className="contact__bottom__box--title">{item.name_box}</div>

        <div
          className="contact__bottom__box--content contact__phone"
          id="contact__phone"
        >
          {string.includes(substring) && item.subtitle} {item.value_box}
        </div>
      </div>
    </div>
  );
};

export default Box;
