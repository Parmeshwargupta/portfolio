import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience_Backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            

            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>php</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </artical>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
