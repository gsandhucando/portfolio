import React from "react";
import ProjectPreview from "./ProjectPreview";

const Project = () => {

  let project = [
    {
      title: "SONU. Clothing",
      previewSrc: "./images/sonu.png",
      siteLink: "https://sonu-fashion.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/fashion_site",
      role: "Owner",
      techUsed: 'ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, Redux, fontAwesome, axios, bcrypt passport',
      notableFeatures: ''
    },
    {
      title: "Langbaan Resturant",
      previewSrc: "./images/lb.png",
      siteLink: "https://damp-badlands-70555.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/resturant-page",
      role: "Owner",
      techUsed: '',
      notableFeatures: ''
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
