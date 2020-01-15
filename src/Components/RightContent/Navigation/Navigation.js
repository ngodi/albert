import React from 'react';
import './Navigation.css';

import Heading from './Heading/Heading';
import Social from './Social/Social';

const Navigation = () => {
  return (
    <div class="navigation">
        
      <Heading />
      <Social />

      <nav>
        <span>About Me</span>
        <span>Projects</span>
        <span>Education</span>
        <span>Experience</span>
        <span>Publications</span>
      </nav>
    </div>
  );
}

export default Navigation;
