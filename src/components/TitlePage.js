import React from "react";
import TitlePageNav from "./TitlePageNav";

const TitlePage = () => {
  return (
    <div id="title" className="title-page-container">
      <img className="title-page-logo" src="./images/logo.png" alt="logo" />
      <div className="title-page-textbox">
        <h3>Software Engineer</h3>
        <div className="title-page-nav-container">
          <TitlePageNav />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
