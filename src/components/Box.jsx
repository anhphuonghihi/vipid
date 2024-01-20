import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";
const Box = ({ icon, label, name, add }) => {
  const navigate = useNavigate();
  const editInfo = (id) => {
    navigate(`/info/${id}`, { state: { name: "edit" } });
  };
  const addInfo = (id) => {
    navigate(`/info/${id}`, { state: { name: "add" } });
  };
  const nameIf = useReadLocalStorage(name);
  return (
    <>
      {add && (
        <>
          {nameIf === null && (
            <div onClick={() => addInfo(name)} class={`contact__bottom__box`}>
              <div className="contact__bottom__box--icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div className="contact__bottom__box--text">
                <div className="contact__bottom__box--title">{label}</div>

                <div
                  className="contact__bottom__box--content contact__phone"
                  id="contact__phone"
                >
                  {add}
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {!add && (
        <>
          {nameIf !== null && (
            <div onClick={() => editInfo(name)} class={`contact__bottom__box`}>
              <div className="contact__bottom__box--icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div className="contact__bottom__box--text">
                <div className="contact__bottom__box--title">{label}</div>

                <div
                  className="contact__bottom__box--content contact__phone"
                  id="contact__phone"
                >
                  {nameIf}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Box;
