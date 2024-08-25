import React from 'react';
import project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const pros = [
        {
            id: 1,
            src: project1,
            title: "Job Placement Prediction Using Machine Learning",
            codeLink: "https://github.com/chaithanyakj24/PREDICTION" // Replace with actual link
        },
        {
            id: 2,
            src: Project2,
            title: "Department Resources and Activities Management System",
            codeLink: "https://github.com/chaithanyakj24/DBMS-PROJECT" // Replace with actual link
        },
    ];

    const achievements = [
        {
            id: 1,
            title: "Internship",
            src: cert1,
            description: "Participated in the AICTE Virtual Internship program at MotionCut, focusing on developing web applications and enhancing user interfaces."
        },
        {
            id: 2,
            title: "Course Completion",
            src: cert2,
            description: "Completed the course by Dr. Angela Yu on Udemy, gaining proficiency in full-stack web development, including HTML, CSS, JavaScript, Node.js, Express, and MongoDB."
        },
        {
            id: 3,
            title: "Internship",
            src: cert3,
            description: "Completed the 1-month Innoventure Internship Program conducted by the Center of Excellence in Artificial Intelligence and Machine Learning."
        },
        {
            id: 4,
            title: "Achievement",
            src: cert4,
            description: "Team The Braille Spell secured 2nd position in the Prototyping Expo, Gamers Street 2022, and in Envision'22 Expo."
        },
    ];

    const renderCard = ({ id, src, title, description, isProject, codeLink }) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt={title} className='rounded-md duration-200 hover:scale-105' />
            <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
                {description && <p className='mb-4'>{description}</p>}
                {isProject && (
                    <div className='flex items-center justify-center'>
                        <a href={codeLink} target="_blank" rel="noopener noreferrer" className='text-white text-xl'>
                            <FaGithub className='hover:text-gray-400 duration-200' />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className='bg-gradient-to-b from-black to-blue-950 w-full text-white min-h-screen'>
            {/* Projects Section */}
            <div id="project and acheivement" className='min-h-screen flex flex-col justify-center'>
                <div className='max-w-screen-lg p-4 mx-auto w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Projects and Achievements</p>
                        <p className='py-6 text-2xl font-semibold'>Projects</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                        {pros.map((project) => renderCard({ ...project, isProject: true }))}
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div name="achievements" className='min-h-screen flex flex-col justify-center'>
                <div className='max-w-screen-lg p-4 mx-auto w-full'>
                    <div className='pb-8'>
                        <p className='py-6 text-2xl font-semibold'>Achievements</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                        {achievements.map((achievement) => renderCard({ ...achievement, isProject: false }))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
