'use client'
import React from 'react';
import Link from 'next/link';


type PropsType = {
    href: string;
    text: string;
};

const StyledLink = ({ href, text }: PropsType ) => {
    return (
        <Link className="text-purple-600 hover:font-bold hover:text-current" href={href}>
            {text}
        </Link>
    );
};

export default StyledLink;
