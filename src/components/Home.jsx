import React from 'react';
import portfolio from "../assets/portfolio.png";
import { IoDocument } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-gradient-to-b from-black via-black to-blue-950">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Namaste, My name is{' '}
            <span className="text-purple-500 animate-expand">Chaithanya K J</span>

          </h2>


          <p className="text-gray-500 py-4 max-w-md hidden md:block">
           Hello I am a front-end developer passionate about creating interactive and dynamic user experiences.
          </p>
          <div className="hidden md:block">
            <a href="https://drive.google.com/file/d/19kMLEAvpzT_xGmHpJ_9xoSTbgC3IVs8q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-700 to-blue-900 cursor-pointer">
                RESUME
                <span className="group-hover:rotate-12 duration-300">
                  <IoDocument size={25} className="ml-3" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={portfolio}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
          {/* Social Icons */}
          <div className="flex justify-center mt-7 space-x-7">
            <a href="https://www.linkedin.com/in/chaithanya-k-j-075137229/" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/chaithanya_k_j_/" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaInstagram />
            </a>
            <a href="mailto:chaithanhakj002@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaEnvelope />
            </a>
            <a href="https://github.com/chaithanyakj24" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}

    </div>
  );
};

export default Home;