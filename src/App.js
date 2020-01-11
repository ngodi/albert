import React from 'react';
import './App.css';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import RightContent from './Components/RightContent/RightContent';

function App() {
  return (
    <div className="App">
        <LeftSidebar />
        <RightContent />
     </div>
  );
}

export default App;
