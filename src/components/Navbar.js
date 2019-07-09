import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <img className="aboutme-nav-logo" src="./images/logo.png" alt="logo" />
      <ul className="aboutme-nav-ul">
        {/* <Link
          activeClass="active"
          to="about me"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li id="about me">about me</li>
        </Link> */}
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
        <li>resume</li>
        <a href="https://github.com/gsandhucando" target="_blank" rel="noopener noreferrer"><li>github</li></a>
        <a href="https://www.linkedin.com/in/gurjot-sandhu-954364a9/" target="_blank" rel="noopener noreferrer"><li>linkedin</li></a>
      </ul>
    </nav>
  );
};

export default Navbar;
