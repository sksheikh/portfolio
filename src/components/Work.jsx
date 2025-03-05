import React from 'react';
import ProjectCard from './ProjectCard';

const Work = () => {
    const works = [
        {
            imgSrc: '/src/assets/images/project-1.jpg',
            title: 'Full stack music app',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://musify-5al0.onrender.com/',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]

        },
        {
            imgSrc: '/src/assets/images/project-2.jpg',
            title: 'Free stock photo app',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            tags: ['API', 'SPA'],
            projectLink: 'https://pixstock-official.vercel.app/',
            challenges: [
                "Implementing context-aware responses",
                "Managing conversation state",
                "Integrating machine learning models"
            ]
        },
        {
            imgSrc: '/src/assets/images/project-3.jpg',
            title: 'Recipe app',
            description: "Responsive personal portfolio website built with React and Tailwind CSS, showcasing my projects and skills.",
            tags: ['Development', 'API'],
            projectLink: '',
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
            projectLink: 'https://github.com/codewithsadee-org/wealthome',
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
            projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
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
            projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
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
                    {works.map(({ imgSrc, title, description, tags, projectLink, challenges }, key) => (

                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            description={description}
                            tags={tags}
                            projectLink={projectLink}
                            challenges={challenges} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Work
