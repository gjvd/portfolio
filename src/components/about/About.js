import React, { useEffect } from 'react';
import './about.css';
import { color, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import all images using Parcel's url: prefix
import pythonIcon from 'url:../../assets/icons/python.png';
import jsIcon from 'url:../../assets/icons/js.png';
import reactIcon from 'url:../../assets/icons/react.png';
import nodejsIcon from 'url:../../assets/icons/nodejs.png';
import nextjsIcon from 'url:../../assets/icons/nextjs.png';
import tailwindcssIcon from 'url:../../assets/icons/tailwindcss.png';
import mongodbIcon from 'url:../../assets/icons/mongodb.png';
import mysqlIcon from 'url:../../assets/icons/mysql.png';
import postgresqlIcon from 'url:../../assets/icons/postgresql.png';
import dynamodbIcon from 'url:../../assets/icons/dynamodb.png';
import firebaseIcon from 'url:../../assets/icons/firebase.png';
import awsIcon from 'url:../../assets/icons/aws.png';
import stripeIcon from 'url:../../assets/icons/stripe.png';
import twillioIcon from 'url:../../assets/icons/twillio.png';
import postmanIcon from 'url:../../assets/icons/postman.png';
import jiraIcon from 'url:../../assets/icons/jira.png';
import trelloIcon from 'url:../../assets/icons/trello.png';
import gitIcon from 'url:../../assets/icons/git.png';
import githubIcon from 'url:../../assets/icons/github.png';


const techStack = {
    languages: [
        { src: pythonIcon, name: 'Python' },
        { src: jsIcon, name: 'JavaScript' },
    ],

    frameworks: [
        { src: reactIcon, name: 'React' },
        { src: nodejsIcon, name: 'Node.js' },
        { src: nextjsIcon, name: 'Next.js' },
        { src: tailwindcssIcon, name: 'TailwindCSS' },
    ],

    databases: [
        { src: mongodbIcon, name: 'MongoDB' },
        { src: mysqlIcon, name: 'MySQL' },
        { src: postgresqlIcon, name: 'PostgreSQL' },
        { src: dynamodbIcon, name: 'DynamoDB' },
        { src: firebaseIcon, name: 'Firebase' },
    ],

    cloudServices: [
        { src: awsIcon, name: 'AWS (Lambda, S3, API Gateway)' },
        { src: stripeIcon, name: 'Stripe Payments' },
        { src: twillioIcon, name: 'Twilio SMS/WhatsApp' },
    ],

    databases: [
        { src: require('../../assets/icons/mongodb.png'), name: 'MongoDB' },
        { src: require('../../assets/icons/mongodb.png'), name: 'MySQL' },
        { src: require('../../assets/icons/mongodb.png'), name: 'PostgreSQL' },
        { src: require('../../assets/icons/mongodb.png'), name: 'DynamoDB' },
        { src: require('../../assets/icons/mongodb.png'), name: 'Firebase' },
    ],

    cloudServices: [
        { src: require('../../assets/icons/mongodb.png'), name: 'AWS (Lambda, S3, API Gateway)' },
        { src: require('../../assets/icons/mongodb.png'), name: 'Stripe Payments' },
        { src: require('../../assets/icons/mongodb.png'), name: 'Twilio SMS/WhatsApp' },
    ],

    tools: [
        { src: postmanIcon, name: 'Postman' },
        { src: jiraIcon, name: 'Jira' },
        { src: trelloIcon, name: 'Trello' },
        { src: gitIcon, name: 'Git' },
        { src: githubIcon, name: 'GitHub' },
    ],
};



const profileLinks = [
    { href: "https://codeforces.com/profile/vraj_chovatiya", src: "https://asset.brandfetch.io/idMR4CMjcL/idPWmM8aOc.png", alt: "CodeForces" },
    { href: "https://leetcode.com/u/vraj_chovatiya/", src: "https://asset.brandfetch.io/id8BaDflDb/idMTJ6fnty.png", alt: "LeetCode" },
    { href: "https://www.codechef.com/users/vraj_chovatiya", src: "https://asset.brandfetch.io/idM2-b7Taf/id9CeVm2nY.png", alt: "CodeChef" },
    { href: "https://www.hackerrank.com/profile/vrajchovatiya414", src: "https://asset.brandfetch.io/idTrJXGwd0/idAJPV0fZV.png", alt: "HackerRank" },
    { href: "https://www.naukri.com/code360/profile/vb_chovatiya", src: "https://asset.brandfetch.io/ideRRB4-kx/idUvsBj1k5.png", alt: "CodingNinjas" },
    { href: "https://www.geeksforgeeks.org/user/vrajchovatiya11/", src: "https://asset.brandfetch.io/idw2s-0Tuo/idushz6qWf.png", alt: "GeeksForGeeks" }
];

console.log("profileLinks********", profileLinks)

const About = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-container'>
            <motion.div className="heading-about" {...fadeIn}>
                <h1>Here's About Me</h1>
                <p>Here's the information of my background, passion, techStack, etc..</p>
            </motion.div>
            <motion.div className="about-content" {...fadeIn}>
                <div className="text">
                    <h4>About Me</h4>
                    <h2>Giriraj Patoliya</h2>
                    <p>
                        Highly skilled React and Node.js Developer with extensive experience in designing and developing scalable, high-performance web applications. Proficient in creating dynamic user interfaces, building robust backend systems, and integrating databases like MongoDB and Firebase. Expertise in RESTful APIs, state management tools (Redux, Context API), and third-party integrations. Adept at deploying and maintaining applications on AWS, Vercel, and other cloud platforms. Passionate about delivering high-quality solutions tailored to client and user needs, with a strong focus on clean code and performance optimization.
                    </p>
                    {/* https://drive.google.com/file/d/1LwvBzRpjYZtC3JkqiJ3zNxHuqLbihTnd/view?usp=sharing -- old */}
                    <a
                        href="https://docs.google.com/document/d/1tsqd6lSwMQLhuPeVmvNOkGI0wiTY91G3ZU-LiF7u4AI/edit?usp=sharing"
                        className="codepen-button" target='_blank'
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </motion.div>
            <motion.div className="work" {...fadeIn}>
                <div className="work-item">
                    <h2>10+</h2>
                    <p>Project</p>
                </div>
                <div className="work-item">
                    <h2>5+</h2>
                    <p>Python Projects</p>
                </div>
                <div className="work-item">
                    <h2>4+</h2>
                    <p>React & Node.js Projects</p>
                </div>
            </motion.div>

            <div className="languages">
                <h4>Tech Stack</h4>

                <div>
                    <h2>1. Languages</h2>
                    <ul>
                        {techStack.languages.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>2. Frameworks & Libraries</h2>
                    <ul>
                        {techStack.frameworks.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>3. Databases</h2>
                    <ul>
                        {techStack.databases.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>4. Cloud & Integrations</h2>
                    <ul>
                        {techStack.cloudServices.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>5. Tools & Platforms</h2>
                    <ul>
                        {techStack.tools.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <motion.div className="profile-links" {...fadeIn}>
                <h4>Profile Links</h4>
                <div className='card-container'>
                    {profileLinks.map((item, index) => (
                        <div className='card-item' key={index}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <img src={item.src} alt={item.alt} />
                                <p>{item.alt}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </motion.div> */}
        </div>
    );
};

export default About;