import React from "react";
import Project from "./Project";

const AboutMe = ({ nav }) => {
  return (
    <div className="aboutme-container">
      <nav>
        <img className="aboutme-nav-logo" src="./images/logo.png" alt="logo" />
        <ul className="aboutme-nav-ul">{nav}</ul>
      </nav>
      <hr />
      <div>
        <h1>About Me</h1>
        <p>
          asdasd asdsa ds dsa dsad sad safdsf sdfsdf sdf sd fsd fds dsf dsf sd
          ds dsfsdf sdf sf sf fs sfd f fsd
        </p>
      </div>
      <h1>Most Recent Projects</h1>
      <Project />
    </div>
  );
};

export default AboutMe;
