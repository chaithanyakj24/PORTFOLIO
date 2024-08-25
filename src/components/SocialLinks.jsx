import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDocument } from 'react-icons/hi';
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/chaithanya-k-j-075137229/',
            style: 'rounded-tr-md', // Top-right rounded
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/chaithanyakj24',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:chaithanyakj002@gmail.com', // Corrected email link
        },
        {
            id: 4,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/chaithanya_k_j_/',
        },
        {
            id: 5,
            child: (
                <>
                    Resume <HiOutlineDocument size={30} />
                </>
            ),
            href: 'https://drive.google.com/file/d/19kMLEAvpzT_xGmHpJ_9xoSTbgC3IVs8q/view?usp=drive_link',
            style: 'rounded-br-md', // Bottom-right rounded
        },
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-600 ${style || ''}`}
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
