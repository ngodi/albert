/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { projectList } from './projectsData';
import './Projects.scss';

const Projects = () => {
 const projects = projectList.map(project => {
     return (
         <div class = "project">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className = "tech">{project.tech.map(tec => 
                  <span className="tec">{tec}</span>
              )}</div>
          
            </div>
            <div className="image-div">
             <img src = {project.preview} alt="Preview" width = "100%" />
             <div className = "links">
              <a target = "_blank" href = {project.code} ><i class="fab fa-github"></i>&nbsp;View code</a>
                <a target = "_blank" href = {project.demo} ><i class="fas fa-external-link-alt"></i>&nbsp;View Demo</a>
              </div>
            </div>          
         </div>
     )
 })
  return (
    <div class="projects">
      <h2><i class="fas fa-laptop-code"></i> Software Projects</h2>
       <div className="projects-list">
       {projects}
       </div>
       <div id="experience"></div>
    </div>
  );
}

export default Projects;