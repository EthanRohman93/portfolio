'use client'
import React from "react";


const RohmanIcon: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="fixed left-3 top-0 m-3 p-2 font-bold cursor-pointer rounded-xl bg-purple-600"
            onClick={handleClick}
        >
        Rohman
        </div>
    );
};

export default RohmanIcon;
