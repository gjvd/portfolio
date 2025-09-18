import React, { useEffect } from 'react';
import './experience.css';
import { color, motion, useAnimation } from 'framer-motion';

const experiences = [
    {
        company: 'Swan Softweb Solutions',
        role: 'Python Developer',
        location: 'Ahmedabad',
        timeLine: 'Apr 2018 - Mar 2020',
    },
    {
        company: 'Perception System Private Limited',
        role: 'Python Developer, React Developer, Node.js Developer',
        location: 'Ahmedabad',
        timeLine: 'Aug 2020 - Sep 2024',
    },
    {
        company: 'Prestious IT Solutions',
        role: 'Software Development Engineer (MERN Stack Developer)',
        location: 'Surat',
        timeLine: 'Apr 2025 - Present',
    },
];

const Experience = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div className="heading-experience" {...fadeIn}>
                <h1>Here's My Experience</h1>
                <p>Here's the experience of my web development journey.</p>
            </motion.div>
            <motion.div className="experience-container" {...fadeIn}>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.company}</h3>
                        <p><strong>Role:</strong> {exp.role}</p>
                        <p><strong>TimeLine:</strong> {exp.timeLine}</p>
                        <p><strong>Location:</strong> {exp.location}</p>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Experience;