import React from "react";
import Navbar from './Navbar';
import Project from "./Project";

const AboutMe = ({ nav }) => {
  return (
    <div className="aboutme-container">
      <Navbar />
      <hr />
      <div className="aboutme-text-container">
        <h1>About Me</h1>
        <p className="project-notable-text">
          asdasd asdsa ds dsa dsad sad safdsf sdfsdf sdf sd fsd fds dsf dsf sd
          ds dsfsdf sdf sf sf fs sfd f fsd
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
