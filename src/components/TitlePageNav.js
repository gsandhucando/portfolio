import React from "react";
import { Link } from "react-scroll";


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
        href="https://drive.google.com/file/d/16zfsBDL9S9r2HrAvevaYRvTUoVY9Bm1V/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>resume</li>
      </a>

    </ul>
  );
};

export default TitlePageNav;
