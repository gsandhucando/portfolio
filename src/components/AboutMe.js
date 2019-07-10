import React from "react";
import Navbar from "./Navbar";
import Project from "./Project";

const AboutMe = ({ nav }) => {
  return (
    <div className="aboutme-container">
      <Navbar />
      <hr />
      <div className="aboutme-text-container">
        <h1>About Me</h1>
        <p className="project-notable-text">
          I'm a Full Stack engineer that enjoys problem solving and looking for
          opportunities to put my skills to use.
        </p>
      </div>
      <div className="aboutme-projects-div">
        <h1 id="projects">Most Recent Projects</h1>
        <Project />
      </div>
    </div>
  );
};

export default AboutMe;
