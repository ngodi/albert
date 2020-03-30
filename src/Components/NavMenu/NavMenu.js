import React from 'react';

import './NavMenu.scss';

import '../Social/Social';
import Social from '../Social/Social';

const NavMenu = () => {
  return (
    <div class="navmenu">
        <i className="fas fa-3x fa-bars"></i>
        <Social />
         <nav>
            <a href="#about">ABOUT ME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#education">EDUCATION</a>
            <a href="#education">CONTACT</a>
        </nav>
   </div>
  );
}

export default NavMenu;
