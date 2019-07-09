import React from 'react';
import TitlePageNav from './TitlePageNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon size={"3x"} icon={faGithub} />;

const TitlePage = () => {

  return (
    <div className="title-page-container">
      <img className="title-page-logo" src="./images/logo.png" alt='logo' />
      <div className="title-page-textbox">
      <h3>Software Engineer</h3>
      <div className="title-page-nav-container">
        <TitlePageNav />
      </div>
      </div>
    </div>
  )
}

export default TitlePage;