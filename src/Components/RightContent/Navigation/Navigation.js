import React from 'react';
import './Navigation.css';

import Heading from './Heading/Heading';
import Information from './Information/Information';
import Social from './Social/Social';

const Navigation = () => {
  return (
    <nav class="navigation">
      <Information />
      <img class="img-circle" src="./images/profile_pic.jpg" alt="portrait" width="200px"></img>
      <Social />
      <Heading />
      <span>About Me</span>
      <span>Projects</span>
      <span>Education</span>
      <span>Experience</span>
      <span>My Skills</span>
      <span>Publications</span>
    </nav>
  );
}

export default Navigation;
