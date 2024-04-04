import React from 'react';

type params = {
    pname: string;
    title: string;
    description: string[];
}


export async function generateStaticParams() {
    const res = await fetch('http://localhost:3000/api/project/');
    const pnames = await res.json()
    return pnames.map((pname) => ({
        pname: pname.toString()
    }))
}

async function getProject(pname) {
    const res = await fetch(`http://localhost:3000/api/project/${pname}`);
    const data = await res.json();
    return data;
}


export default async function ProjectPage ({ params }) {
    const project = await getProject(params.pname);
    console.log({project});
    return (
        <div>
            <h1>{project.title}</h1>
            {project.description.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </div>
    );
}
