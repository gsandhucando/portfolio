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

  let feature = notableFeatures.split('\n').map((text, i) => {
    return <p key={i}>{text}</p>
  })

  return (
    <div className="project-prev-container">
      <h3>{title}</h3>
      <p className="project-notable-text">
        <span style={{ fontWeight: "bold" }}>Role:</span> {role}
      </p>
      <p className="project-notable-text">
        <span style={{ fontWeight: "bold" }}>Technologies Used:</span>{" "}
        {techUsed}
      </p>
      <div className="project-notable-text">
        <span style={{ fontWeight: "bold" }}>About Project:</span>{" "}
        {feature}
      </div>
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
