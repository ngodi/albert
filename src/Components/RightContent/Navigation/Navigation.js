import React from 'react';
import './Navigation.scss';

import Heading from './Heading/Heading';

const Navigation = () => {
  return (
    <div class="navigation" >
      <Heading />
      <div className="right-nav">
    
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        </nav>
      </div>
      <div id="projects"></div>
    </div>
  );
}

export default Navigation;
