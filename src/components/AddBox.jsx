import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
const AddBox = ({ icon,name_box,value_box }) => {
  const navigate = useNavigate();
  const addInfo = (id) => {
    navigate(`/info/${id}`);
  };
  return (
    <div
      onClick={() => addInfo("response_data_hovaten")}
      class={`contact__bottom__box`}
    >
      <div className="contact__bottom__box--icon">
        <FontAwesomeIcon icon={`${icon}`} />
      </div>
      <div className="contact__bottom__box--text">
        <div className="contact__bottom__box--title">{name_box}</div>
        <div
          className="contact__bottom__box--content contact__phone"
          id="contact__phone"
        >
          {value_box}
        </div>
      </div>
    </div>
  );
};

export default AddBox;
