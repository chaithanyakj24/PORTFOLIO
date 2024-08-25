import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full min-h-screen bg-gradient-to-b from-black via-black to-blue-950 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-700'>About</p>
                </div>
                <p className='text-xl mt-20 text-justify'>
                    A passionate <span className="text-green-500">Web Developer</span> with a strong foundation in web development
                    and programming. Currently pursuing a Bachelor of Engineering in Computer Science at
                    <a href="https://www.sahyadri.edu.in/" target="_blank" rel="noopener noreferrer" className="text-orange-500"> Sahyadri College of Engineering and Management, Mangaluru</a>.
                    I have developed a keen interest in improving my skills in <span className="text-green-500">HTML, CSS, JavaScript, Bootstrap, Tailwind, MongoDB, FireBase</span> and more.
                    I am always eager to learn and take on new challenges, striving to create innovative solutions that
                    enhance user experiences. My journey in web development has led me to work on various projects, ranging
                    from simple websites to complex web applications. I am particularly interested in the intersection of
                    technology and design, and I enjoy creating user-centric solutions that not only function seamlessly but
                    also offer a visually appealing experience.
                </p>
                <br />
                <p className='text-xl text-justify'>
                    Feel free to explore my portfolio and get in touch if you'd like to collaborate on a project or discuss
                    potential opportunities. I am excited about the possibilities that lie ahead and look forward to
                    connecting with like-minded individuals.
                </p>
            </div>
        </div>
    );
};

export default About;
