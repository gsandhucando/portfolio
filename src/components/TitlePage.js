import React from "react";
import TitlePageNav from "./TitlePageNav";
import { Spring } from "react-spring/renderprops";

const TitlePage = () => {
  return (
    // <Spring
    //   from={{ opacity: 1, marginLeft: -2000 }}
    //   to={{ opacity: 1, marginLeft: 0 }}
    //   config={{ delay: 0, duration: 1000 }}
    // >{props => (
    <div /*style={props}*/ id="title" className="title-page-container">
      <img className="title-page-logo" src="./images/logo.png" alt="logo" />
      <div className="title-page-textbox">
        <h3>Software Engineer</h3>
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
