import React from 'react';
import './MainContent.css';

import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Navigation from '../Navigation/Navigation';
import NavMenu from '../NavMenu/NavMenu';

const MainContent = () => {

  return (
    <div class="maincontent"  id="about">
       <NavMenu />
       <Navigation />
       <Projects />
       <Experience />
       <Education />
     
      
    </div>
  );
}

export default MainContent;