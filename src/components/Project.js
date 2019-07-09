import React from "react";
import ProjectPreview from "./ProjectPreview";

const Project = () => {

  let project = [
    {
      title: "Langbaan Resturant",
      previewSrc: "./images/lb.png",
      siteLink: "https://damp-badlands-70555.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/resturant-page"
    },
    {
      title: "Sonus Clothing Site",
      previewSrc: "./images/sonu.png",
      siteLink: "https://sonu-fashion.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/fashion_site"
    },
  ];

  return (
    <div className="projects-container">
      { project.map(site => {
        return <ProjectPreview key={site.title} {...site} />
      })
      }
    </div>
  );
};

export default Project;
