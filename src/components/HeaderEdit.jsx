import React from "react";

const HeaderEdit = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="title">{title}</h2> <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default HeaderEdit;
