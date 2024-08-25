import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import react from "../assets/react.png";

const Experience = () => {
    const experience = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: node,
            title: 'NODE.JS',
            style: 'shadow-green-600'
        },
        {
            id: 8,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-400'
        },
    ];

    return (
        <div id="experience" className='w-full min-h-screen bg-gradient-to-b from-black via-black to-blue-950 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-700 p2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>Explored Technologies....</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experience.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
