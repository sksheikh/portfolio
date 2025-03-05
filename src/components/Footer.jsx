import React from 'react';
import { ButtonPrimary } from './Button';

const Footer = () => {
    const sitemap = [
        {
            label: 'Home',
            href: '#home'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Work',
            href: '#work'
        },
        // {
        //     label: 'Reviews',
        //     href: '#reviews'
        // },
        // {
        //     label: 'Contact me',
        //     href: '#contact'
        // }
    ];

    const socials = [
        {
            label: 'GitHub',
            href: 'https://github.com/sksheikh'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sheikh-salah-uddin/'
        },
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/skuddin.ius/'
        }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className='section'>
            <div className="container">


                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let&apos;s work together!
                        </h2>

                        <ButtonPrimary
                            href="mailto:skuddin.ius@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target='_blank'
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="pt-10 mb-8">
                    {/* <a
                        href="/"
                        className="">
                        <img
                            src="/src/assets/images/logo.png"
                            alt="logo"
                            width={150}
                            height={150}
                        />
                    </a> */}

                    <p className="text-zinc-500 text-sm text-center">
                        &copy; {currentYear} <span className='text-zinc-200'>Sheikh Salah Uddin</span>
                    </p>

                </div>
            </div>

        </footer>
    )
}

export default Footer
