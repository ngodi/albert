import React from 'react';
import './MainContent.css';

import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';

const MainContent = () => {

  return (
    <div class="maincontent"  id="about">
       <NavMenu />
       <Header />
       <Projects />
       <Experience />
       <Education />
        <div className="footer">
          <p>Quick Contact form</p>
          <p>Publications</p>
          <p>Social links</p>
        </div>
      
    </div>
  );
}

export default MainContent;