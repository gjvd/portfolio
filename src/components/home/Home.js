import React, { useEffect, useState } from 'react';
import image from '../../assets/img/Me.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

import './home.css';

const Home = () => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    // toggle full screen mode
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log("image********", image)

    return (
        <>
            <div className="home">
                <ParticlesBackground />
                <div className="content">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to<br /> <span>Giriraj Patoliya's</span> Portfolio..
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Dedicated ReactJS developer with extensive project-based expertise in building seamless, visually appealing web apps. Expert in creating attractive user interfaces, integrating backend services, and ensuring easy navigation.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link to="/about" className="codepen-button"><span>About Me</span></Link>
                    </motion.div>
                </div>
                <motion.div
                    className="image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <img src={image} alt="Giriraj Patoliya" className="profile-image" onClick={toggleFullScreen} />

                </motion.div>

                {/* Full-Screen Overlay */}
                {isFullScreen && (
                    <div className="overlay" onClick={toggleFullScreen}>
                        <motion.img
                            src={image}
                            alt="Giriraj Patoliya"
                            className="full-image"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
