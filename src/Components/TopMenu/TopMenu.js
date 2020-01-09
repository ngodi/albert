import React from 'react';
import './TopMenu.css';

import './Heading/Heading';
import Navigation from './Navigation/Navigation';
import Heading from './Heading/Heading';

const TopMenu = () => {
  return (
    <div class="topmenu">
      <Heading />
      <Navigation />
    </div>
  );
}

export default TopMenu;
