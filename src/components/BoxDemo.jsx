import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const BoxDemo = ({ icon, label, name }) => {
  return (
    <>
      {name !== null && (
        <div class={`contact__bottom__box`}>
          <div className="contact__bottom__box--icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="contact__bottom__box--text">
            <div className="contact__bottom__box--title">{label}</div>

            <div
              className="contact__bottom__box--content contact__phone"
              id="contact__phone"
            >
              {name}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxDemo;
