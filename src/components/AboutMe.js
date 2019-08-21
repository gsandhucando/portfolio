import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Project from "./Project";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import Contact from './Contact';

const chevronUp = <FontAwesomeIcon id="title" size={"2x"} icon={faChevronUp} />;

const AboutMe = ({ nav }) => {
  let [scrollHeight, setScrollHeight] = useState(false);

  let updateDimensions = () => {
    if (window.pageYOffset > 300) {
      setScrollHeight(true);
    } else {
      setScrollHeight(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("scroll", updateDimensions);
    return () => {
      window.removeEventListener("scroll", updateDimensions);
    };
  }, []);

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
        {/* <Contact /> */}
      </div>
      {scrollHeight ? (
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
      ) : null}
      <p className='heart-container'>
        Made with{" "}
        <span className="heart">
          <svg className="heart" viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>{" "}
        </span>{" "}
        from scratch
      </p>
    </div>
  );
};

export default AboutMe;
