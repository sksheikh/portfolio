import React from 'react';
import SkillCard from './SkillCard';
import FigmaImg from '../assets/images/figma.svg'





const Skill = () => {
    const skillItem = [
        {
            imgSrc: FigmaImg,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: '/src/assets/images/css3.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/src/assets/images/bootstrap.svg',
            label: 'Bootstrap',
            desc: 'User Interface'
        },
        {
            imgSrc: '/src/assets/images/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/src/assets/images/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        // {
        //     imgSrc: '/src/assets/images/nodejs.svg',
        //     label: 'NodeJS',
        //     desc: 'Web Server'
        // },
        // {
        //     imgSrc: '/src/assets/images/expressjs.svg',
        //     label: 'ExpressJS',
        //     desc: 'Node Framework'
        // },
        // {
        //     imgSrc: '/src/assets/images/mongodb.svg',
        //     label: 'MongoDB',
        //     desc: 'Database'
        // },
        {
            imgSrc: '/src/assets/images/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: '/src/assets/images/nextjs.svg',
            label: 'NextJs',
            desc: 'Framework'
        },        
        {
            imgSrc: '/src/assets/images/php.svg',
            label: 'PHP',
            desc: 'Programming Language'
        },
        {
            imgSrc: '/src/assets/images/laravel.svg',
            label: 'Laravel',
            desc: 'PHP Framework'
        },
        {
            imgSrc: '/src/assets/images/mysql.svg',
            label: 'MySQL',
            desc: 'Database'
        },
        {
            imgSrc: '/src/assets/images/postgres.svg',
            label: 'PostgresSQL',
            desc: 'Database'
        },
        {
            imgSrc: '/src/assets/images/github.svg',
            label: 'GitHub',
            desc: 'Version Control'
        }
    ];

    return (
        <section className='section'>
            <div className="container">
                <h2 className='headline-2'>
                    Essential Tools I Use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch">
                    Discover the powerful tools and technologies I use for developing great, high-performance websites and applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skill
