import React from "react";
import ProjectPreview from "./ProjectPreview";
// import Contact from './Contact';

const Project = () => {
  let project = [
    {
      title: "Marvel Hero Search",
      previewSrc: "./images/marvel_hero.png",
      siteLink: "https://marvel-app1.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/marvel",
      role: "Owner/Creator",
      techUsed:
        "ReactJS, react-router-dom, HTML5, CSS3, axios",
      notableFeatures: `This is a front-end project and is hosted on heroku, please allow it to take 10-20 seconds to load.\n
      Search for famous Marvel heroes.\n
      Click on them and find out more.\n
      I used the Marvel API to fetch data\n`
    },
    {
      title: "SONU. Clothing",
      previewSrc: "./images/sonu.png",
      siteLink: "https://sonu-fashion.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/fashion_site",
      role: "Owner/Creator",
      techUsed:
        "ReactJS, Redux, react-router-dom, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, Redux, fontAwesome, axios, bcrypt, passport local strategy.",
      notableFeatures: `This is a full stack project and is hosted on heroku, please allow it to take 10-20 seconds to load.\n
        Created REST API of clothing items which includes, images, prices, names, colors, and categories.\n
        Used local strategy authentication. There are two options at checkout, sign in with email: guest@guest.com password: 123456, or sign up wait a few seconds for heroku to register and sign in.\n
        The password is hashed and salted using bcryptjs.\n
        Each user is tracked by a session cookie that has a max life of 24 hours.\n
        Once signed in cart keeps track of the number of items using Redux.`
    },
    {
      title: "Langbaan Resturant",
      previewSrc: "./images/lb.png",
      siteLink: "https://damp-badlands-70555.herokuapp.com/",
      githubLink: "https://github.com/gsandhucando/resturant-page",
      role: "Owner/Creator",
      techUsed:
        "ReactJS, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, Mongoose, fontAwesome, axios, dotenv, lodash, simple-react-calendar, react-transition-group, react-google-maps, material-ui.",
      notableFeatures: `This is a full stack project and is hosted on heroku, please allow it to take 10-20 seconds to load.\n
      I redid an existing restaurant site with my design inputs.\n
      In the footer emails can be submitted to a database.\n
      Created a photo carousel with an image animation that appear when the site renders and disappear on left or right click.\n
      Clicking team going to the first member clicking on them allows a bio modal to pop up.\n
      Clicking reservations on desktop view allows a modal to pop up with options for number of guests and the date. These get added to the database.
      `
    }
  ];

  return (
    <div className="projects-container">
      {project.map(site => {
        return <ProjectPreview key={site.title} {...site} />;
      })}
    {/* <Contact /> */}
    </div>
  );
};

export default Project;
