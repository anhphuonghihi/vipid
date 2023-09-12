import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div class="header__back" onClick={() => navigate(-1)}>
      <>
        <i class="fa-solid fa-arrow-left"></i>
        {title}
      </>
    </div>
  );
};

export default GoBack;
