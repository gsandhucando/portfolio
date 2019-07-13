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
      techUsed:
        "ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, Redux, fontAwesome, axios, bcrypt, passport local strategy.",
      notableFeatures:
        `This is a full stack project and is hosted on heroku, please allow it to take 10-20 seconds to load.\n
        Created REST API of clothing items which includes, images, prices, names, colors, and categories.\n
        Used local strategy authentication. There are two options at checkout, sign in with email: guest@guest.com password: 123456, or sign up wait a few seconds for heroku to register and sign in.\n
        The password is hashed and salted using bcryptjs.\n
        Each user is tracked by a session cookie that has a max life of 24 hours.\n
        Once signed in cart keeps track of the number of items using Redux.
        `
    },
    {
      title: "Langbaan Resturant",
      previewSrc: "./images/lb.png",
      siteLink: "https://damp-badlands-70555.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/resturant-page",
      role: "Owner",
      techUsed: "ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, fontAwesome, axios, dotenv, lodash, simple-react-calendar, react-transition-group, react-google-maps, material-ui.",
      notableFeatures: "I redid an existing restaurant site with my own design. In the footer you can submit an email address and it gets added to the database. I created a photo carousel with an image animation that only happens when the site renders and disappears when clicking to the next image. When clicking reservations not in mobile view I create a model that has a calendar and dropdown menus that get added to a database. In team I only created a model for the first team member just to show the ability to do so. In mobile view I created a hamburger menu that has a slight fade in transition."
    }
  ];

  return (
    <div className="projects-container">
      {project.map(site => {
        return <ProjectPreview key={site.title} {...site} />;
      })}
    </div>
  );
};

export default Project;
