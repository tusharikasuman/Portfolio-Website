import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl italic font-fancy text-violet-400 drop-shadow-sm">
  Project </h1>

      <div className="flex flex-col items-center gap-10">
        {PROJECTS.map((project, index) => (
          <div key={index} className="max-w-xl w-full p-6 rounded-2xl border-4 border-neutral-800">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h2>
            <p className="text-neutral-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

