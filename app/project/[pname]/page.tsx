import React from 'react';
import { ProjectName, ProjectProps } from '../../types/Project';

export async function generateStaticParams(): Promise<ProjectName[]> {
    const res = await fetch('http://localhost:3000/api/project/');
    const pnames = await res.json();
    return pnames.map((pname: string) => ({
        pname: pname
    }));
}

async function getProject(pname: string) {
    const res = await fetch(`http://localhost:3000/api/project/${pname}`);
    const data = await res.json();
    return data;
}


export default async function ProjectPage ({ params }: ProjectProps) {
    const project = await getProject(params.pname);
    return (
        <div>
            <h1>{project.title}</h1>
            {project.description.map((desc: string, index: number) => (
                <p key={index}>{desc}</p>
            ))}
        </div>
    );
}
