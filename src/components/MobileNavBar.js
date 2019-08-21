import React from "react";
import { Link } from "react-scroll";

const MobileNavBar = ({mobile}) => {
  let styles = {
    hideNav: {
      opacity: 0,
      visibility: "hidden"
    },
    showNav: {
      opacity: 1,
      visibility: "visible"
    }
  };
  return (
    <div className="aboutme-mobile-nav-container">
      {/* <img className="aboutme-nav-logo" src="./images/logo.png" alt="logo" /> */}
      <ul style={!mobile ? styles.hideNav : styles.showNav} className="aboutme-mobile-nav-ul">
        <a
          href="https://drive.google.com/file/d/19AU_4c1kRXsaaGqvlaoRH2nNUgxxNrlc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>resume</li>
        </a>
        <a
          href="https://github.com/gsandhucando"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/gurjot--sandhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>linkedin</li>
        </a>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <li>contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNavBar;
