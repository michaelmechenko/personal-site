import React from 'react';
import projects from '../data/projects';
import ProjectItem from './ProjectItem';

export default function Projects() {
   return (
      <div className="mx-auto">
        <div className="mx-auto text-3xl underline text-orange-300 text-center pb-6">projects</div>
         <div className="flex flex-row w-4/6 h-4/6 mx-auto space-x-6">
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