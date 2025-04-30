import React from "react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 pt-20 bg-[#0b0b25] text-white">
      <div className="flex flex-col items-center lg:items-start justify-center max-w-6xl mx-auto px-4 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">Tusharika </span>
          <span className="text-violet-400">Suman</span>
        </h1>
        <p className="mt-4 text-lg lg:text-xl text-neutral-400 font-light">
          Frontend Developer | CSE Student at SRM Institute of Science & Technology
        </p>
      </div>
    </div>
  );
};

export default Hero;
