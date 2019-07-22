import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Project from "./Project";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Contact from './Contact';

const chevronUp = <FontAwesomeIcon id="title" size={"2x"} icon={faChevronUp} />;

const AboutMe = ({ nav }) => {
  let [ scrollHeight, setScrollHeight] = useState(false);

  let updateDimensions = () => {
    if (window.pageYOffset > 300) {
      setScrollHeight(true)
    } else {
      setScrollHeight(false)
    }
  }

  useEffect(()=> {
    updateDimensions();
    window.addEventListener("scroll", updateDimensions);
    return () => {
      window.removeEventListener("scroll", updateDimensions);
    };
  }, [])

  return (
    <div className="aboutme-container">
      <Navbar />
      <hr />
      <div className="aboutme-text-container">
        <h1 id="about_me">About Me</h1>
        <p className="aboutme-notable-text">
          I specialize in software engineering as a full stack developer. I
          enjoy solving complex problems using technology and am excited by new
          opportunities to learn. Look forward to speaking with you about your
          next idea.
        </p>
      </div>
      <div className="aboutme-projects-div">
        <h1 id="projects">Most Recent Projects</h1>
        <Project />
        <Contact />
      </div>
      { scrollHeight ?
      <Link
        className="upArrow"
        activeClass="active"
        to="title"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        {chevronUp}
      </Link>
      : null
      }
    </div>
  );
};

export default AboutMe;
