import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddShow = () => {
  const navigate = useNavigate();
  const onNav = () => {
    navigate("/add-info");
  };
  return (
    <button id="save-btn" onClick={onNav}>
      <FontAwesomeIcon icon="fa-solid fa-plus"/>
    </button>
  );
};

export default AddShow;
