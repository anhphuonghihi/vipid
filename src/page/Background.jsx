import React from "react";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";
import BoxBackground from "../components/BoxBackground";
const Background = () => {
  return (
    <div>
      <GoBack title="Giao diện" />
      <HeaderEdit title="Chọn giao diện" />
      <BoxBackground />
    </div>
  );
};

export default Background;
