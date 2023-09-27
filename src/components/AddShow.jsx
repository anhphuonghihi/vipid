import React from "react";
import { useNavigate } from "react-router-dom";

const AddShow = () => {
  const navigate = useNavigate();
  const onNav = () => {
    navigate("/add-info");
  };
  return (
    <button id="save-btn" onClick={onNav}>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

export default AddShow;
