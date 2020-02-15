import React from 'react';

import './NavMenu.scss';

const NavMenu = () => {
  return (
    <div class="navmenu">
       <nav>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
        </nav>
   </div>
  );
}

export default NavMenu;
