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
        "It's a little slow because of the free herokuapp so it might take some time loading up data. I created and designed my own shopping site with figma with a few changes from the original render. I created the data.json for the project with links to the clothing with prices, names, categories and referencing colors then pushed it to mongoDB using the item model. On checkout you can sign in using e-mail: guest@guest.com password: 123456. There might be items already in the cart depending on previous use. You can also sign up then use the same information used to sign up to sign in, this might take some time because of the free herokuapp. I used passport local strategy for authentication with a session cookie that keeps track of each user and last a day on your computer. I had to use redux to show the number of items in the cart at all times and in mobile view in the hamburger menu the number of items are also shown at all times."
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
