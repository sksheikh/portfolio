import React from 'react';
import BootstrapImg from '../assets/images/bootstrap.svg';
import CssImg from '../assets/images/css3.svg';
import FigmaImg from '../assets/images/figma.svg';
import GithubImg from '../assets/images/github.svg';
import JsImg from '../assets/images/javascript.svg';
import LaravelImg from '../assets/images/laravel.svg';
import MysqlImg from '../assets/images/mysql.svg';
import NextImg from '../assets/images/nextjs.svg';
import PhpImg from '../assets/images/php.svg';
import PostgresImg from '../assets/images/postgres.svg';
import ReactImg from '../assets/images/react.svg';
import TailwindImg from '../assets/images/tailwindcss.svg';
import SkillCard from './SkillCard';





const Skill = () => {
    const skillItem = [
        {
            imgSrc: FigmaImg,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: CssImg,
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: BootstrapImg,
            label: 'Bootstrap',
            desc: 'User Interface'
        },
        {
            imgSrc: TailwindImg,
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: JsImg,
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
            imgSrc: ReactImg,
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: NextImg,
            label: 'NextJs',
            desc: 'Framework'
        },
        {
            imgSrc: PhpImg,
            label: 'PHP',
            desc: 'Programming Language'
        },
        {
            imgSrc: LaravelImg,
            label: 'Laravel',
            desc: 'PHP Framework'
        },
        {
            imgSrc: MysqlImg,
            label: 'MySQL',
            desc: 'Database'
        },
        {
            imgSrc: PostgresImg,
            label: 'PostgresSQL',
            desc: 'Database'
        },
        {
            imgSrc: GithubImg,
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
