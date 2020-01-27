/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './About.css';

const About = () => {
  return (
    <div class="about">
        
      <div className="about-data">
       <div className="about-info">
       <img className="img-rounded" src="./images/profile_pic.jpg" alt="portrait" width="400px"></img>
       </div>
      <div className="about-desc">
      <h2>About Me</h2>
      <p>
          I am a Senior Software Developer with over 5 years of experience developing software with high standards and interacting 
          with multiple stakeholders from technical and non-technical backgrounds, ensuring clarity, quality, and continuous delivery. 
          I am a self-starter with a proven ability to leverage multiple technologies to build interactive and innovative applications.
          I have a Bachelor's Degree in Computer Science and work with technologies such as Ruby, Ruby on Rails, Javascript, React, HTML5, CSS3, BOOTSTRAP, GIT,   
       </p>
    
      </div>
     </div>
     <div id="projects"></div>
    </div>
  );
}

export default About;