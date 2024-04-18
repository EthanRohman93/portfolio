'use client'
import React from 'react';

type PropsType = {
    title: string;
    includeBorder?: boolean;
    id: string;
};

const SectionTitle = ({ title, includeBorder = true, id }: PropsType) => {
    // Ensure that size falls within the valid range of tailwind text sizes

    const textSizeClass = 'text-3xl font-bold';
    const containerClass = `flex justify-center items-center m-3 p-2 rounded-xl overflow-hidden mx-4 my-2 ${
        includeBorder ? 'border-4 border-purple-600' : ''
    }`;

    return (
        <div id={id} className={containerClass}>
            <h1 className={textSizeClass}>{title}</h1>
        </div>
    );
};

export default SectionTitle;
