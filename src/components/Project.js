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
      techUsed: 'ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, Redux, fontAwesome, axios, bcrypt, passport local strategy.',
      notableFeatures: 'hosted project, its a little slow because of the free herokuapp so it might take some time loading up data or a reload of the page. when checking out sign up with an email and password then use that to sign in right after. On checkout page use: e-mail: guest@guest.com password: 123456 if using guest@guest.com items might already be in cart depending on previous use or sign up once you hit enter login with the same info the mlab database is slow so you might have to relogin a couple times.'
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


