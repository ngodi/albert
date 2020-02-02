import React from 'react';
import './Navigation.scss';

import Heading from './Heading/Heading';
import Social from './Social/Social';
import Skills from './Skills/Skills';

const Navigation = () => {
  return (
    <div class="navigation" >
        
      <Heading />
      <div className="right-nav">
      <Social />
        <div className="contact">
        <span><i class="fas fa-home"></i> Sonara Road, Limbe, Cameroon</span>
        <span><i class="fas fa-mobile-alt"></i> +237 672378393</span>
        <span><i class="fas fa-envelope"></i> albertngodi@gmail.com</span>
      </div>
      <Skills />
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        </nav>
        <div className="bar-menu">
        <i class="fas fa-3x fa-bars"></i>
        </div>
      </div>

    </div>
  );
}

export default Navigation;
