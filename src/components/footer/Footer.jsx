import React from "react";
import "./footer.css";
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>EGATOR</a>
    <ul className='pernalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>
    <div className="footer_socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
      <a href="http://github.com"><BsGithub/></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Parmeshwar Gupta.</small>
    </div>
   </footer>
  )
};

export default footer;
