import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon size={"2x"} icon={faGithub} />;
const linkedin = <FontAwesomeIcon size={"2x"} icon={faLinkedin} />;

const TitlePageNav = () => {
  return (
    <ul className="title-page-ul">
      <Link
        activeClass="active"
        to="about_me"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <li id="about me">about me</li>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <li>projects</li>
      </Link>
      <a
        href="https://drive.google.com/file/d/14DrJL8TGR7cme5xCg3ZFTxCHioKCyqVd/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>resume</li>
      </a>
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
    </ul>
  );
};

export default TitlePageNav;
