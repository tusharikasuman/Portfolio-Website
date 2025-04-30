import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Fancy Heading */}
      <h1 className="my-20 text-center text-4xl italic font-fancy text-violet-400 drop-shadow-sm">
        My <span className="text-white">Experience</span>
      </h1>

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            {/* Year */}
            <div className="w-full lg:w-1/4 mb-2 lg:mb-0">
              <p className="text-lg font-semibold text-purple-300">{experience.year}</p>
            </div>

            {/* Experience Content */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-1 text-xl font-bold text-white">
                {experience.role}
              </h6>
              <p className="mb-2 text-md text-violet-200 italic font-medium">
                {experience.company}
              </p>
              <p className="mb-4 text-neutral-400 leading-relaxed">
                {experience.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-2 rounded-xl bg-purple-900/40 px-3 py-1 text-sm text-purple-100 font-medium shadow-sm hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
