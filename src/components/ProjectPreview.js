import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon size={"3x"} icon={faGithub} />;

const ProjectPreview = ({
  title,
  previewSrc,
  siteLink,
  githubLink,
  role,
  techUsed,
  notableFeatures
}) => {
  return (
    <div className="project-prev-container">
      <h3>{title}</h3>
      <p className="project-notable-text"><span style={{ fontWeight: "bold" }}>Role:</span> {role}</p>
      {/* <div className="project-text-container"> */}
      <p className="project-notable-text">
        <span style={{ fontWeight: "bold" }}>Technologies Used:</span> {techUsed}
      </p>
      <p className="project-notable-text">
        <span style={{ fontWeight: "bold" }}>Notable Features:</span> {notableFeatures}
      </p>
      {/* </div> */}
      <img className="project-img" src={previewSrc} alt={title} />
      <div className="btn-div">
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          <button style={{ fontSize: 15 }} className="project-btn">
            Live Preview
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="project-btn">{github}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
