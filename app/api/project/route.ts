import fs from 'fs';
import path from 'path';

// Path to the projects directory
const projectsDirectory = path.join(process.cwd(), 'public', 'project');

export async function GET() {
  const filenames = fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.json'));

  const projectNames = filenames.map(filename => filename.replace('.json', ''));

  return new Response(JSON.stringify(projectNames), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

