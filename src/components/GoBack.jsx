import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ({ title }) => {
  const navigate = useNavigate();
  const host = window.location.host;
  return (
    <>
      {!(host === "h5.zdn.vn") && (
        <div className="header__back" onClick={() => navigate(-1)}>
          <>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            {title}
          </>
        </div>
      )}
    </>
  );
};

export default GoBack;
