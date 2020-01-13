/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { projectList } from './projectsData';
import './Projects.css';

const Projects = () => {

 const projects = projectList.map(project => {
     return (
         <div class = "project">
            <h3>{project.title}</h3>
            <img src = {project.preview} alt="Preview" width = "300px"/>
            <p>{project.description}</p>
            <p className = "tech">Technology Stack:{project.tech.map(tec => 
                 <span>{tec}</span>
            )}</p>
           <div className = "links">
           <a target = "_blank" href = {project.code} >Source code</a>
            <a target = "_blank" href = {project.demo} >Live Preview</a>
           </div>
         </div>
     )
 })
  return (
    <div class="projects">
      <h2><i class="fas fa-laptop-code"></i> Software Projects</h2>
       {projects}
    </div>
  );
}

export default Projects;