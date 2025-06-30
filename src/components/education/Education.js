import React, { useEffect } from 'react';
import './education.css';
import { color, motion, useAnimation } from 'framer-motion';

const Education = () => {

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
            <motion.div className="heading-edu" {...fadeIn}>
                <h1>Here's My Education</h1>
                <p>Here's the information about my educational background...</p>
            </motion.div>
            <motion.div className='container' {...fadeIn}>
                <div className='timeline'>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2011</h2>
                            <h3>SSC</h3>
                            <p>Shree Navijiavan Kumar Chatralaya, Navagadh</p>
                            <p className='highlight'>Percentage: 67.33%</p>
                        </div>
                    </div>

                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2011-2014</h2>
                            <h3>Diploma in I.T.</h3>
                            <p>Om Institute of Engineering and Technology, Junagadh</p>
                            <p className='highlight'>CGPA: 7.40</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2014-2017</h2>
                            <h3>Bachelor of Engineering (I.T.)</h3>
                            <p>Noble Group of Institutions, Junagadh</p>
                            <p className='highlight'>CGPA: 8.30</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default Education;