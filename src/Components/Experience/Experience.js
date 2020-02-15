/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { experienceList } from './experienceData';
import './Experience.scss';

const Experience = () => {
    const experience = experienceList.map(exp => {
        return (
            <div className = "experienceItem">
              <div className = "jobheading">
                <span>{exp.job}</span>
                <span>@ {exp.company}</span>
                <span> {exp.period}</span>
              </div>
              <ul>{exp.description.map(item => {
                  return (
                      <li>{item}</li>
                  )
              })}</ul>
            </div>
        )
    })
  return (
    <div class="experience">
        <h2><i class="fas fa-briefcase"></i> Experience</h2>
      <div className="experience-list">
      { experience }
      </div>
    </div>
  );
}

export default Experience;