import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'public', 'project');

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pname = url.pathname.split('/').pop();
  const filePath = path.join(projectsDirectory, `${pname}.json`);
  
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return new Response(jsonData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Project not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

