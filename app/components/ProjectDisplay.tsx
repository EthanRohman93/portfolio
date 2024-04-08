import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

const ProjectDisplay = async () => {
    const projectsDirPath = path.join(process.cwd(), 'public', 'project');
    const filenames = await fs.readdir(projectsDirPath);
    return (
        <div>{filenames.map(filename => <div key={filename}>{path.parse(filename).name}</div>)}</div>
    );
};

export default ProjectDisplay;
