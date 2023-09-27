import React from "react";

const ContactTitle = ({ name, position, cty }) => {
  return (
    <div className="contact">
      <h2 className="contact__name" id="contact__name">
        {name}
      </h2>
      <span className="contact__job_position"> {position} </span>
      <div className="contact__company" id="contact__cty">
        {cty}
      </div>
    </div>
  );
};

export default ContactTitle;
