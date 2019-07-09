import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon size={"3x"} icon={faGithub} />;

const TitlePage = () => {
  let nav = ['about me', 'projects', 'resume'].map(list => {
    return <li key={list}>{list}</li>
  })
  return (
    <div className="title-page-container">
      <img className="title-page-logo" src="./images/logo.png" alt='logo' />
      <div className="title-page-textbox">
      <h3>Software Engineer</h3>
      <div className="title-page-nav-container">
        <ul className="title-page-ul">
        {nav}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default TitlePage;