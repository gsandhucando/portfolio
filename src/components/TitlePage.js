import React from "react";
import TitlePageNav from "./TitlePageNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Spring } from "react-spring/renderprops";

const github = <FontAwesomeIcon size={"2x"} icon={faGithub} />;
const linkedin = <FontAwesomeIcon size={"2x"} icon={faLinkedin} />;

const TitlePage = () => {
  return (
    // <Spring
    //   from={{ opacity: 1, marginLeft: -2000 }}
    //   to={{ opacity: 1, marginLeft: 0 }}
    //   config={{ delay: 0, duration: 1000 }}
    // >{props => (
    <div /*style={props}*/ id="title" className="title-page-container">
      <div className='title-page-holder'>
      <img className="title-page-logo" src="./images/logo.png" alt="logo" />
      <div className="title-page-textbox">
        <h3>Software Engineer</h3>
        <a
        className="github"
        href="https://github.com/gsandhucando"
        target="_blank"
        rel="noopener noreferrer"
      >
        {github}
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/gurjot--sandhu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkedin}
      </a>
      </div>
        <div className="title-page-nav-container">
          <TitlePageNav />
        </div>
      </div>
    </div>
    // )}
    // </Spring>
  );
};

export default TitlePage;
