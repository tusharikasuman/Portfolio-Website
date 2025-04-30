import { RiReactjsLine } from "react-icons/ri";
import {SiPython, SiCplusplus, SiCss3, SiMysql} from "react-icons/si";
import React from "react";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl italic font-fancy text-violet-400 drop-shadow-sm">
  My <span className="text-white">Technologies</span>
</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
