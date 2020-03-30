import React from 'react';
import './Header.scss';

import Heading from './Heading/Heading';

const Header = () => {
  return (
    <div class="navigation" >
      <Heading />
      <img className="main-photo" src="./images/de.jpg" alt="My Photo" width="200px" />
     
      <div id="projects"></div>
    </div>
  );
}

export default Header;
