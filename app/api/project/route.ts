import fs from 'fs';
import path from 'path';

// Path to the projects directory
const projectsDirectory = path.join(process.cwd(), 'public', 'project');

export async function GET() {
  const filenames = fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.json'));

  // Map each filename to an object with a pname property
  const projects = filenames.map(filename => ({
    pname: filename.replace('.json', ''),
  }));

  const responseObject = {
    projects, // This now assigns the array of objects to the projects key
  };

  return new Response(JSON.stringify(responseObject), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
