import React from 'react';
import { Link } from "react-scroll";

const TitlePageNav = () => {
  return(
    <ul className="title-page-ul">
      <Link
          activeClass="active"
          to="about me"
          spy={true}
          smooth={true}
          offset={352}
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
      <li>resume</li>
    </ul>
  )
}

export default TitlePageNav;