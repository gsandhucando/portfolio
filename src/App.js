import React from "react";
import "./App.css";
import TitlePage from "./components/TitlePage";
import AboutMe from "./components/AboutMe";

function App() {
  let nav = ["about me", "projects", "resume", "github", "linkedin"].map(
    navItem => {
      return <li key={navItem}>{navItem}</li>;
    }
  );
  return (
    <div className="App">
      <TitlePage />
      <AboutMe nav={nav}/>
    </div>
  );
}

export default App;
