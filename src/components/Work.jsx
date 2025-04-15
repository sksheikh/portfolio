import React from 'react';
import ProjectCard from './ProjectCard';

const Work = () => {
    const works = [
        {
            imgSrc: '',
            title: 'Rise',
            description: "A clothing brand e-commerce web app  built with Laravel and NextJs enabling online purchases.",
            tags: ['Laravel', 'NextJs', 'Redux'],
            liveLink: 'https://www.rise-brand.com/',
            gitHubLink: '',
            challenges: [
                "Filtered product by category,color & size",
                "Implemented add-to-cart, checkout, guest checkout, and Google authentication",
                "Developed API and Implement in new arrival section "
            ]

        },
        {
            imgSrc: '',
            title: 'MSDSL Support App',
            description: "A client support and management system built with Laravel and React, designed to streamline client interactions and automate payment notifications.",
            tags: ['Laravel', 'NextJs', 'PostgreSQL'],
            liveLink: 'http://154.26.137.89:8091/',
            gitHubLink: '',
            challenges: [
                "Developed robust APIs to support both web and mobile applications.",
                "Implemented a full-featured support ticketing system, training modules, and detailed reporting.",
                "Integrated separate login and registration systems for clients and support staff."
            ]
        },
        {
            imgSrc: '/src/assets/images/project-3.jpg',
            title: 'Recipe app',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            tags: ['Development', 'API'],
            liveLink: '',
            gitHubLink: '',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]
        },
        {
            imgSrc: '/src/assets/images/project-4.jpg',
            title: 'Real state website',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            tags: ['Web-design', 'Development'],
            liveLink: 'https://github.com/codewithsadee-org/wealthome',
            gitHubLink: '',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]
        },
        {
            imgSrc: '/src/assets/images/project-5.jpg',
            title: 'eCommerce website',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",

            tags: ['eCommerce', 'Development'],
            liveLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
            gitHubLink: '',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]
        },
        {
            imgSrc: '/src/assets/images/project-6.jpg',
            title: 'vCard Personal portfolio',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",

            tags: ['Web-design', 'Development'],
            liveLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
            gitHubLink: '',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]
        },
    ];

    return (
        <section
            id='work'
            className='section'
        >
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My project highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, description, tags, liveLink, gitHubLink, challenges }, key) => (

                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            description={description}
                            tags={tags}
                            liveLink={liveLink}
                            gitHubLink={gitHubLink}
                            challenges={challenges} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Work
