import React from 'react';
import './App.css';

import  TopMenu from './Components/TopMenu/TopMenu';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

function App() {
  return (
    <div className="App">
     <TopMenu />
     <div className = "maincontent">
        <LeftSidebar />
     </div>
    
    </div>
  );
}

export default App;
