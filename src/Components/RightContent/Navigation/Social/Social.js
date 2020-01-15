import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <div class="social">
        <h4>Let's connect</h4>
        <div class="social-links">
        <a href='www.github.com/ngodi'><i class="fab fa-2x fa-github"></i></a>
        <a href='https://www.linkedin.com/in/albert-ngodi-b80267174/'><i class="fab fa-2x fa-linkedin-in"></i></a>
        <a href='https://twitter.com/albertngodi'> <i class="fab fa-2x fa-twitter"></i></a>
        <span><i class="fas fa-home"></i> Sonara Road, Limbe, Cameroon</span>
        <span><i class="fas fa-mobile-alt"></i> +237 672378393</span>
        <span><i class="fas fa-envelope"></i> albertngodi@gmail.com</span>
        </div>
    </div>
  );
}

export default Social;
