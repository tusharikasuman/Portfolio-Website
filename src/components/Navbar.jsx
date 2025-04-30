import React from "react";
import logo from "../assets/tusharikasumanlogo.png"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <span className="ml-4 text-xl font-semibold text-white">Tusharika Suman</span>
        </div>
  
        {/* Social Icons */}
        <div className="flex items-center gap-5 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/tusharika-suman-328497270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tusharikasuman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/tusharika.suman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
