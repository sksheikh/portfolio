import { bool } from 'prop-types';
import React, { useEffect, useRef } from 'react';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()

    const initActiveBox = () => {
        // console.log(lastActiveLink.current.offsetTop)
        // console.log(activeBox.current)
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);

    window.addEventListener('resize', initActiveBox)

    const activeCurrentLink = (e) => {
        lastActiveLink.current?.classList.remove('active');
        e.target.classList.add('active');
        lastActiveLink.current = e.target;

        activeBox.current.style.top = e.target.offsetTop + 'px';
        activeBox.current.style.left = e.target.offsetLeft + 'px';
        activeBox.current.style.width = e.target.offsetWidth + 'px';
        activeBox.current.style.height = e.target.offsetHeight + 'px';
    }

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    return (
        <>
            <nav className={'navbar ' + (navOpen ? 'active' : '')} >
                {navItems.map(({ label, link, className, ref }, key) => (
                    <a
                        key={key}
                        href={link}
                        className={className}
                        ref={ref}
                        onClick={activeCurrentLink}>
                        {label}
                    </a>
                ))}

                <div
                    className="active-box"
                    ref={activeBox}></div>
            </nav>
        </>
    )
}

Navbar.PropTypes = {
    navOpen: bool.isRequired
}

export default Navbar
