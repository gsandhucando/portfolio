import React, { useState } from "react";

const Project = () => {
  let [title] = useState(["Langbaan Resturant", "Sonus Clothing Site"]);

  let [previewSrc] = useState(["./images/lb.png", "./images/sonu.png"]);

  let [siteLink] = useState([
    "https://damp-badlands-70555.herokuapp.com/",
    "https://sonu-fashion.herokuapp.com/"
  ]);

  let [githubLink] = useState([
    "https://github.com/gsandhucando/resturant-page",
    "https://github.com/gsandhucando/fashion_site"
  ]);

  // let mainTitle = title.map(name => {
  //   return <h3>{name}</h3>;
  // });

  // let mainImg = previewSrc.map(img => {
  //   return <img className="project-img" src={img} alt={img} />;
  // });

  return (
    <div className="projects-container">
      <div>
        <h3>{title[0]}</h3>
        <img className="project-img" src={previewSrc[0]} alt="lb preview" />
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Project;
