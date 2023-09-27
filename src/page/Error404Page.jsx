import React, { useEffect } from "react";

import img_404 from "../asset/img/4040.png";
import { useNavigate } from "react-router-dom";
const Error404Page = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="container__404">
      <img src={img_404} alt="Quay lại" />
    </div>
  );
};

export default Error404Page;
