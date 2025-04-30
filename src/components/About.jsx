import React from "react";
import AboutImg from "../assets/aboutme.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        {/* Fancy Title */}
        <h1 className="my-20 text-center text-4xl italic font-fancy text-violet-400 drop-shadow-sm">
          About <span className="text-white">Me</span>
        </h1>
  
        {/* Content Section */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between px-4">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl w-72 shadow-lg" src={AboutImg} alt="about" />
            </div>
          </div>
  
          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="text-left text-neutral-400 text-lg leading-relaxed">
              {ABOUT_TEXT}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;