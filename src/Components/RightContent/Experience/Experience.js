/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { experienceList } from './experienceData';
import './Experience.css';

const Experience = () => {
    const experience = experienceList.map(exp => {
        return (
            <div className = "experienceItem">
              <div className = "jobheading">
                <span>Job Title: {exp.job}</span>
                <span>Company Name: {exp.company}</span>
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
        <h2>Experience</h2>
       { experience }
    </div>
  );
}

export default Experience;