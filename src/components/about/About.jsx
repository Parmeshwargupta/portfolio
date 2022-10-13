import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { SiCodeproject } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <artical className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience & Achivement
              </h5>
              <small>machine Learning 
              </small>
            </artical>
            <artical className="about_card">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5><a href="https://jovian.ai/parmeshwarmrj18/notebooks">Machine Learning </a></h5>
              <small>4+ completed
                <a href="https://jovian.ai/parmeshwarmrj18/notebooks"><h1>Visit my Projects</h1></a>
              </small>
            </artical>
            <artical className="about_card">
              <SiCodeproject className="about_icon" />
              <h5><a href="https://parmeshwargupta.github.io/math_game/">Web Development</a></h5>
              <small>10+ Completed
              <a href="https://parmeshwargupta.github.io/math_game/"><h1>Visit my Projests</h1></a>
                
              </small>
            </artical>
          </div>
          <p>
            React is a library for building composable user interfaces. It
            encourages the creation of reusable UI components, which present
            data that changes over time. Lots of people use React as the V in
            MVC. React abstracts away the DOM from you, offering a simpler
            programming model and better performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
