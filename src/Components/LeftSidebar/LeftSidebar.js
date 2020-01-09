import React from 'react';
import './LeftSidebar.css';

import Information from './Information/Information';
import Skills from './Skills/Skills';
import Social from './Social/Social';

const LeftSidebar = () => {
  return (
    <div class="leftsidebar">
      <img class="img-thumbnail" src="./images/favicon.ico" alt="portrait" width="300px"></img>
      <Information />
      <Skills />
      <Social />
    </div>
  );
}

export default LeftSidebar;
