import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import ProjectButton from './ProjectButton';

const ProjectDisplay = async () => {
    const projectsDirPath = path.join(process.cwd(), 'public', 'project');
    const filenames = await fs.readdir(projectsDirPath);
    return (
        <div>
            {filenames.map(filename => {
                const projectName = path.parse(filename).name;
                return (
                    <div key={filename} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                        <span>{projectName}</span> {/* Display the project name */}
                        <ProjectButton pname={projectName} /> {/* Use ProjectButton for navigation */}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectDisplay;
