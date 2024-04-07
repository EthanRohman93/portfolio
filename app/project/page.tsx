"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '../types/Project';
import { getProjectNames } from '../lib/projectsService';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjectsAPI().then(setProjects).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.pname}>
            <Link href={`/project/${project.pname}`}>
              {project.pname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;

