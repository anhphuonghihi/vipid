import React from "react";

const ContactTitle = ({ name, position, cty }) => {
  return (
    <div class="contact">
      <h2 class="contact__name" id="contact__name">
        {name}
      </h2>
      <span class="contact__job_position"> {position} </span>
      <div class="contact__company" id="contact__cty">
        {cty}
      </div>
    </div>
  );
};

export default ContactTitle;
