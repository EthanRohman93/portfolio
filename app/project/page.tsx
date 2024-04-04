import Link from 'next/link';

async function getProjects() {
    const res = await fetch('http://localhost:3000/api/project');
    const projectNames = await res.json();
    return projectNames;
}

export default async function ProjectsPage() {
    const projectNames = await getProjects()
    console.log(projectNames)
    return (
        <div>
          <h1>Projects</h1>
          <ul>
                {projectNames && projectNames.map(name => (
                    <li key={name}>
                        <Link href={`/project/${name}`}>
                            {name}
                        </Link>
                    </li>
                ))}      
            </ul>
        </div>
    );
}

