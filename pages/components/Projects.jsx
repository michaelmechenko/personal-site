import React from 'react';
import projects from '../data/projects';
import ProjectItem from './ProjectItem';

export default function Projects() {
   return (
      <div id="projects" className="mx-auto">
        <div className="mx-auto text-3xl underline text-orange-300 text-center pb-6">projects</div>
         <div className="grid grid-cols-2 grid-rows-2 grid-flow-row-dense
          mx-auto lg:w-1/3 lg:h-1/3 md:w-2/3 h-2/3
          gap-14">
            {projects.map(project => (
               // eslint-disable-next-line react/jsx-key
               <ProjectItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}