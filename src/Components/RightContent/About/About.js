/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './About.css';

const About = () => {
  return (
    <div class="about">
        <h2>About Me</h2>
       <p>
       Have great passion for developing software solutions to solve everyday problems. Improving my skills and knowledge daily so as to boost my talent and having an opportunity to exploit my competence is my ultimate routine. Meeting like minded developers as well as having a challenging job will be very satisfying. 
       </p>
       <p>
       I speak both French and English, intend to learn Spanish, Chinese and German.
Also a music lover.
       </p>
       <p>
           I am proactive, excellent communicator, punctual, respectful, honest, humble, loyal and love learning.
       </p>
      <div className="myskills">
          Tech stack: 
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