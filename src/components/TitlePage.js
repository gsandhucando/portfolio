import React from 'react';

const TitlePage = () => {
  let nav = ['about me', 'projects', 'resume'].map(list => {
    return <li>{list}</li>
  })
  return (
    <div className="title-page-container">
      <img className="title-page-logo" src="./images/logo.png" alt='logo' />
      <div className="title-page-textbox">
      <h3>Software Engineer</h3>
      <div className="title-page-nav-container">
        <ul className="title-page-ul">
        {nav}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default TitlePage;