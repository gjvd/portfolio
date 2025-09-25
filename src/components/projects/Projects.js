import React, { useEffect } from 'react';
import './projects.css';
import { motion } from 'framer-motion';

import preOpenHouse from 'url:../../assets/projects/openhouse.jpeg';
import streetTour from 'url:../../assets/projects/streettour.png';
import prancer from 'url:../../assets/projects/prancer.jpeg';
import accounttation from 'url:../../assets/projects/account.png';
import lugelo from 'url:../../assets/projects/lugelo.png';
import handsome from 'url:../../assets/projects/handsome.png';
import biratin from 'url:../../assets/projects/graice.jpeg';
import evenergy from 'url:../../assets/projects/evenergy.png';
import clinicare from 'url:../../assets/projects/cliniccare.png';

const projects = [
    {
        id: 1,
        title: "Pre Open House",
        description:
            "A web application that automates property sales information for home buyers, real estate agents, mortgage lenders, and brokerage firms. The goal is to simplify home buying while helping agents gain customers quickly through automation.",
        image: preOpenHouse,
        github: "#"
    },
    {
        id: 2,
        title: "Street Tour",
        description:
            "A travel assistance platform providing detailed information, costs, and videos for local attractions. Designed to help tourists plan budgets, avoid overpaying, and enjoy better experiences with location insights.",
        image: streetTour,
        github: "#"
    },
    {
        id: 3,
        title: "Prancer",
        description:
            "A pre- and post-deployment multi-cloud validation framework for Infrastructure as Code (IaC). It ensures continuous compliance by validating resources across providers like AWS, Azure, Google Cloud, and file systems.",
        image: prancer,
        github: "#"
    },
    {
        id: 4,
        title: "Accounttation",
        description:
            "A mobile-first application built with Django and MySQL to manage credit and debit balances for retailers. Features include monthly opening/closing balances, transaction tracking, and simplified account management.",
        image: accounttation,
        github: "#"
    },
    {
        id: 5,
        title: "Lugelo Admin",
        description:
            "An admin panel for Lugelo’s social app, built with React.js and Next.js. Handles stories, categories, statuses, rewards, and analytics. Includes chart-based dashboards and AWS S3 integration for deployment and storage.",
        image: lugelo,
        github: "#"
    },
    {
        id: 6,
        title: "Handsome Admin",
        description:
            "An admin panel for a barber app, developed with React.js and a serverless Node.js backend. Manages features such as playlists, feeds, user searches, appointments, and rewards. Integrated Firebase for real-time notifications.",
        image: handsome,
        github: "#"
    },
    {
        id: 7,
        title: "Graice AI",
        description:
            "An AI platform built with React.js, Next.js, and GraphQL that integrates services like ChatGPT, Bard, and Anthropic. Implemented Stripe for subscription billing, top-ups, and managed domain/IP-based access restrictions.",
        image: biratin,
        github: "#"
    },
    {
        id: 8,
        title: "EvEnergy Portal",
        description:
            "A web and admin portal to manage gas and electricity connections, plan changes, and inquiries. Features partner portals, MFA options, and super admin management. Built using AWS Amplify with GraphQL and REST APIs.",
        image: evenergy,
        github: "#"
    },
    {
        id: 9,
        title: "ClinicCare",
        description:
            "A patient management platform for clinics specializing in sleep and respiratory therapy. Provides user roles, SSO, permission handling, and secure data management. Backend uses AWS Lambda, SQS, DynamoDB, and PostgreSQL with microservices architecture.",
        image: clinicare,
        github: "#"
    }
];

const Projects = () => {
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
            <motion.div className='heading-project' {...fadeIn}>
                <h1>Here are My Projects</h1>
                <p>Here's the project that I have created In this journey..</p>
            </motion.div>

            <motion.div className="project-container" {...fadeIn}>
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Projects;
