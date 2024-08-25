import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-black text-white py-4 flex flex-col items-center">
            <div className="text-center mb-2">
                <p>&copy; {new Date().getFullYear()} CHAITHANYA K J. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/chaithanya-k-j-075137229/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="hover:text-gray-400" />
                </a>
                <a href="https://www.instagram.com/chaithanya_k_j_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} className="hover:text-gray-400" />
                </a>
                <a href="https://drive.google.com/file/d/19kMLEAvpzT_xGmHpJ_9xoSTbgC3IVs8q/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <AiOutlineFilePdf size={30} className="hover:text-gray-400" />
                </a>
                <a href="https://github.com/chaithanyakj24" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="hover:text-gray-400" />
                </a>
                <a href="mailto:chaithanhakj002@gmail.com">
                    <FaEnvelope size={30} className="hover:text-gray-400" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
