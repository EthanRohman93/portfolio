'use client'
import React, { useState, useEffect } from 'react';
import RohmanIcon from './RohmanIcon';
import EthanIcon from './EthanIcon';
import NavBarR from './NavBarR';

const CornerIcon = () => {
    const [showRohman, setShowRohman] = useState(window.scrollY > 0);
    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowRohman(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            style={{backgroundColor: 'rgb(var(--background-start-rgb))'}}
            className='rounded-xl'
            onMouseEnter={() => setShowNavBar(true)} // Show NavBarR on hover
            onMouseLeave={() => setShowNavBar(false)} // Hide NavBarR when not hovering
        >
            {/* Icon container with hover handlers */}
            <div
                className={`bg-inherit rounded-xl fixed top-0 left-3 m-3 transition-opacity duration-500 ${showRohman ? 'opacity-100' : 'opacity-100'}`}
            >
                {showRohman ? <RohmanIcon /> : <EthanIcon />}

                {/* Container for NavBarR, shows on hover of the Icon container */}
                <div 
                    className={`bg-inherit rounded-xl fixed top-12 left-3 transition-opacity duration-500 ${showNavBar ? 'opacity-100' : 'opacity-0'}`}
                >
                    {showNavBar && <NavBarR />}
                </div>
            </div>
            
        </div>
    );
};

export default CornerIcon;
