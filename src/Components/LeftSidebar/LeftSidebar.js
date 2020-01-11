import React from 'react';
import './LeftSidebar.css';

import Information from './Information/Information';
import Skills from './Skills/Skills';
import Social from './Social/Social';
import Heading from './Heading/Heading';

const LeftSidebar = () => {
  return (
    <div class="leftsidebar">
      <Heading />
      <img class="img-circle" src="./images/profile_pic.jpg" alt="portrait" width="200px" height="200px"></img>
      <Information />
      <Skills />
      <Social />
    </div>
  );
}

export default LeftSidebar;
