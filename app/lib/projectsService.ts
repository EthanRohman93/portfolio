import { promises as fs } from 'fs';
import path from 'path';

export const async function getProjectNames = (): string[] => {
    const projectsDirPath = path.join(process.cwd(), 'public', 'project');
    const filenames = fs.readdirSync(projectsDirPath);
    return filenames.map(filename => path.parse(filename).name);
};

export const getProjectData = (name: string) => {
    const filePath = path.join(process.cwd(), 'public', 'project', `${name}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
};

