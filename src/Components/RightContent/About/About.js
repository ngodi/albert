/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './About.css';

const About = () => {
  return (
    <div class="about">
        <h2>About Me</h2>
       <p>
       I am a Senior Software Developer with over 5 years of experience developing software with high standards and interacting 
       with multiple stakeholders from technical and non-technical backgrounds, ensuring clarity, quality, and continuous delivery. 
       I am a self-starter with a proven ability to leverage multiple technologies to build interactive and innovative applications.
       I have a Bachelor's Degree in Computer Science and work with technologies such as : 
       </p>
      <div className="myskills">
           
          <span>Ruby  </span>
          <span>Ruby on Rails  </span>
          <span>Javascript  </span>
          <span>React  </span>
          <span>HTML5  </span>
          <span>CSS3  </span>
          <span>BOOTSTRAP  </span>
          <span>GIT</span>
      </div>
    </div>
  );
}

export default About;