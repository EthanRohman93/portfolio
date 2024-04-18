'use client'
import React from 'react';
import JumpLink from '../JumpLink';
import ProjectLinks from '../project/ProjectLinks';

const NavBarR = () => {
    const homePageLinks = [
        { href: '#tech', text: 'Technologies' },
        { href: '#edu', text: 'Education & Experience' },
        { href: '#mainproj', text: 'Relevant Projects' },
        { href: '#about', text: 'About Me' }
    ];

    const projectLinks = [
        { href: '/project/doughflow', pname: 'DoughFlow' },
        { href: '/project/thesis', pname: 'UI/UX Research Study' },
        { href: '/project/portfolio', pname: 'Portfolio Website' }
    ];

    return (
        <div className="p-4 rounded-xl border-4 border-purple-600 shadow-current">
            <h2 className="text-xl font-bold">Home Page Navigation</h2>
            <ul className="list-none">
                {homePageLinks.map(link => (
                    <li key={link.text}>
                        <JumpLink href={link.href} text={link.text} />
                    </li>
                ))}
            </ul>
            {/*
                <h2 className="text-xl font-bold mt-4">Detailed Project Pages</h2>
                <ul className="list-none">
                    <ProjectLinks pnames={projectLinks.map(link => link.pname)} hrefs={projectLinks.map(link => link.href)} />
                </ul>
            */}
        </div>
    );
};

export default NavBarR;
