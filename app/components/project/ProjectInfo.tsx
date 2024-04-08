import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';

type PropsType = {
    pname: string;
}

const ProjectInfo = async ( {pname}: PropsType) => {
    const filePath = path.join(process.cwd(), 'public', 'project', `${pname}.json`);
    const content = await fs.readFile(filePath, 'utf8');
    
    return (
         <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
            {content}
        </div>
    );
};

export default ProjectInfo;
