import React from 'react';
import './MainContent.css';

import Projects from '../Projects/Projects';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import Social from '../Social/Social';

const MainContent = () => {

  return (
    <div class="maincontent"  id="about">
       <NavMenu />
       <Header />
       <Projects />
        <div id="publications" className="footer">
        <div className="copyright">&copy;{year.getFullYear()}&nbsp; Designed by Ngodi Albert</div>
          <div className="publications">
            <h3>PUBLICATIONS</h3>
            <a target = "_blank" href="https://hackernoon.com/how-to-integrate-devise-and-omniauth-facebook-authentication-to-your-rails-app-tyiv3xpi">1 - How to Integrate ‘devise’ and ‘omniauth-facebook’ Authentication To Your Rails App</a><br />
            <a target = "_blank" href="https://hackernoon.com/good-and-responsive-website-design-is-necessary-for-your-web-projects-psy3x38">2 - Adding Responsive Website Design To Your Web Projects</a>
          </div>
          <div><Social /></div>
        </div>
      
    </div>
  );
}

export default MainContent;