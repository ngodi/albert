/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './Education.css';

const Education = () => {
  return (
    <div class="education">
        <h2><i class="fas fa-graduation-cap"></i> Education</h2>
       <div className="academic-list">
       <div className="academic">
                <i class="fas fa-book-open"></i>
                <span className = "degree">FullStack Web Development Certificate</span>
                <span className = "school">Microverse Remote Software Development School</span>
                <span className = "period">May 2019 - January 2020 </span>
            </div>
            <div className="academic">
                <i class="fas fa-book-open"></i>
                <span className = "degree">Bachelor of Science Degree in Computer science Major</span>
                <span className = "school">University of Buea, Cameroon</span>
                <span className = "period"> October 2014 - November 2017 </span>
            </div>
            <div className="academic">
                <i class="fas fa-book-open"></i>
                <span className = "degree">CISCO CERTIFIED NETWORK PROFESSIONAL, CCNA,CCNP(CSCO12205364)</span>
                <span className = "school">CISCO Network Academy</span>
                <span className = "period">June 2010 - August 2012 </span>
            </div>
            <div className="academic">
                <i class="fas fa-book-open"></i>
                <span className = "degree">Information Technology and Systems Administration</span>
                <span className = "school">SIS Technologies, Douala, Cameroon</span>
                <span className = "period">From June 2005 - November 2008 </span>
            </div>
       </div>
      
    </div>
  );
}

export default Education;