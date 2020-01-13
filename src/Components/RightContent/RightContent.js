import React from 'react';
import './RightContent.css';

import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Navigation from './Navigation/Navigation';

const RightContent = () => {

  return (
    <div class="rightcontent">
       <Navigation />
       <Projects />
       <Experience />
       <Education />
    </div>
  );
}

export default RightContent;