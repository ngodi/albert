import React from 'react';
import './Navigation.scss';

import Heading from './Heading/Heading';

const Navigation = () => {
  return (
    <div class="navigation" >
        <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        </nav>
      <Heading />
    
     
      <div id="projects"></div>
    </div>
  );
}

export default Navigation;
