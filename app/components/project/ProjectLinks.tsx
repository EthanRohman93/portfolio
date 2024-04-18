'use client'
import React from 'react';
import StyledLink from '../StyledLink';

type PropsType = {
    pnames: string[];
    hrefs: string[]
}

const ProjectLinks = ({ pnames, hrefs }: PropsType) => {
    
    return (
        <div>
            {pnames.map((pname, index) => (
                <StyledLink key={index} href={hrefs[index]} text={pname} />
            ))}
        </div>
    );
};

export default ProjectLinks;
