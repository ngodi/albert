import React from 'react';

import './Heading.scss';

import Social from '../Social/Social';

const Heading = () => {
  return (
    <div class="heading">
      <div className="heading-data">
      <span>Ngodi Albert</span>
      <p>Frontend Developer<br />
       Bachelors degree in Computer Science<br />
     Former Network Engineer</p>
      </div>
      <p className="skills">I work with Javascript, Reactjs, Redux, HTML/CSS,  Bootstrap</p>

      <Social />
      <div className="contact">
        <span><i class="fas fa-2x fa-mobile-alt"></i> +237 672378393</span>
        <span><i class="fas fa-2x fa-envelope"></i> albertngodi@gmail.com</span>
      </div>
   </div>
  );
}

export default Heading;
