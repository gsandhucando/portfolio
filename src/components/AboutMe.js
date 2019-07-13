import React from "react";
import Navbar from "./Navbar";
import Project from "./Project";
// import { Link } from "react-scroll";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// const chevronUp = <FontAwesomeIcon id="title" size={"2x"} icon={faChevronUp} />;

const AboutMe = ({ nav }) => {
  return (
    <div className="aboutme-container">
      {/* <Link
        activeClass="active"
        to="title"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {chevronUp}
      </Link> */}
      <Navbar />
      <hr />
      <div className="aboutme-text-container">
        <h1 id="about_me">About Me</h1>
        <p className="project-notable-text">
          I specialize in software engineering as a full stack developer. I
          enjoy solving complex problems using technology and am excited by new
          opportunities to learn. Look forward to speaking with you about your
          next idea.
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
