'use client'
import React from 'react';

type PropsType = {
    title: string;
    size?: number;
    includeBorder?: boolean; // Optional boolean prop to include/exclude the border
};

const SectionTitle = ({ title, size = 1, includeBorder = true }: PropsType) => {
    const textSizeClass = `text-${size}xl font-bold`;
    const containerClass = `flex justify-center items-center rounded-xl overflow-hidden mx-auto max-w-md mx-4 my-2 ${
        includeBorder ? 'border-4 border-purple-600' : ''
    }`; // Conditionally add border classes

    return (
        <div className={containerClass}>
            <h1 className={textSizeClass}>{title}</h1>
        </div>
    );
};

export default SectionTitle;

