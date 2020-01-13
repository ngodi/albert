import React from 'react';
import './RightContent.css';

import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Navigation from './Navigation/Navigation';

const RightContent = () => {

  return (
    <div class="rightcontent">
       <Navigation />
       <About />
       <Projects />
       <Experience />
       <Education />
    </div>
  );
}

export default RightContent;