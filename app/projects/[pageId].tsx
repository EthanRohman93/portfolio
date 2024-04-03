import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../layout'; // Update the import path as necessary.

// Define a TypeScript interface for your project data.
interface ProjectData {
  title: string;
  description: string;
  university?: string;
  repositoryUrl?: string;
  additionalInfo?: string[];
}

// Generates the paths for all project detail pages at build time.
export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects');
  const filenames = fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.json'));
  const paths = filenames.map(filename => ({
    params: { pageId: filename.replace('.json', '') },
  }));

  return { paths, fallback: false };
}

// Fetches the content for each page based on the pageId.
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'projects', `${params.pageId}.json`);
  const jsonData = await fs.promises.readFile(filePath, 'utf8');
  const projectData: ProjectData = JSON.parse(jsonData);

  return {
    props: projectData,
  };
}

// The page component renders the content of the project detail page.
const ProjectPage: React.FC<ProjectData> = ({ title, description, university, repositoryUrl, additionalInfo }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
      {university && <p><strong>{university}</strong></p>}
      {repositoryUrl && <p><a href={repositoryUrl} target="_blank" rel="noopener noreferrer">Project Repository</a></p>}
      {additionalInfo && additionalInfo.length > 0 && (
        <ul>
          {additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default ProjectPage;

