import React from 'react';
import './Navigation.css';

import Heading from './Heading/Heading';
import Social from './Social/Social';

const Navigation = () => {
  return (
    <div class="navigation" >
        
      <Heading />
      <Social />
      <div className="right-nav">
    
        <div className="contact">
        <span><i class="fas fa-home"></i> Sonara Road, Limbe, Cameroon</span>
        <span><i class="fas fa-mobile-alt"></i> +237 672378393</span>
        <span><i class="fas fa-envelope"></i> albertngodi@gmail.com</span>
      </div>
      <nav>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#publications">Publications</a>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
