import React from 'react';
// import Logo from '../assets/images/logo.svg';
import Logo from '../assets/images/logo.png';


const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 2
    }
];

const About = () => {
    return (
        <section id='about' className='section'>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I'm Sheikh Salah Uddin, a skilled Laravel and React developer passionate about building dynamic, high-performing web applications. With a strong blend of backend efficiency and frontend interactivity, I transform ideas into seamless digital experiences that are both powerful and visually engaging. Let's bring your vision to life with cutting-edge technology and top-tier performance!
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className='text-sm text-zinc-400'>{label}</p>
                                </div>
                            ))
                        }

                        <img
                            src={Logo}
                            alt="logo"
                            width={150}
                            height={150}
                            className='ml-auto md:w-[30] md:h-[30]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
