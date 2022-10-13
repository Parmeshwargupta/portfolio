import React from "react";
import "./header.css";
import ME from "../../assets/parmeswar photo.jpg";
import CTA from "./CTA";

import HeaderSocial from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Parmeshwar Gupta</h1>
        <h5 className="text-light">Learner</h5>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <CTA />
        <HeaderSocial />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
