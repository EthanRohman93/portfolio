// app/projects/[pageId]/page.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import Layout from '../layout';

// This function generates the paths for all project detail pages at build time
export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  const paths = filenames.map(filename => ({
    params: { pageId: filename.replace('.html', '') },
  }));

  return { paths, fallback: false };
}

// This function fetches the content for each page based on the pageId
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'projects', `${params.pageId}.html`);
  const htmlContent = await fs.promises.readFile(filePath, 'utf8');

  // Optionally, extract the title from the HTML content
  const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "Default Title";

  return {
    props: {
      htmlContent,
      title,
    },
  };
}

// The page component renders the HTML content of the project detail page
const ProjectPage = ({ htmlContent, title }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Layout>
  );
};

export default ProjectPage;

