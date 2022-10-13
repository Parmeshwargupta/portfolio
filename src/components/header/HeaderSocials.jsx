import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a hreff="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="http://instagram.com" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
