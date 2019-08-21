import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import MobileNavBar from "./MobileNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Bars = <FontAwesomeIcon className="line1" size={"2x"} icon={faBars} />;

const Navbar = () => {
  let [mobile, setMobile] = useState(false);
  let [hamburger, setHambuger] = useState(false);

  let updateDimensions = () => {
    if (window.innerWidth < 440) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  let mobileNav = () => {
    setHambuger(!hamburger);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <nav>
      <img className="aboutme-nav-logo" src="./images/logo.png" alt="logo" />
      {mobile ? (
        <div onClick={mobileNav} className="mobile-hamburger-container">
          {/* seperate for different effects */}
          {Bars}
          {hamburger ? <MobileNavBar mobile={mobile} /> : null}
        </div>
      ) : (
        <>
          <ul className="aboutme-nav-ul">
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
