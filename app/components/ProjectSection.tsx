import React from 'react';
import Link from 'next/link';

// Define projects data
const projects = [
  {
    title: "Text Message Marketing Campaign Analysis",
    description: "Analyzed user login and interaction data using Python, Pandas, SQL (with CTEs), and ggplot2. Aimed to measure the effectiveness of a marketing campaign in re-engaging users. Presented findings to over 50 stakeholders, demonstrating campaign success.",
    type: "work"
  },
  {
    title: "Semantic and Elastic Search Comparison and Improvement",
    description: "Integrated Hugging Face sentence transformers with Chroma for custom embedding models, compared against ElasticSearch with tuned fuzzy matching. Achieved comparable performance, enhancing search capabilities and user experience.",
    type: "work"
  },
  {
    title: "Deterministic Answer Bot",
    description: "Implemented a bot using Hugging Face's models, with MLflow for management and Databricks for hosting. Delivered immediate, reliable customer service responses.",
    type: "work"
  },
  {
    title: "Data Pipelining",
    description: "Enhanced large data pipelines with Databricks and Ascend, employing PySpark for data processing and Jenkins for CI/CD, contributing to a substantial codebase.",
    type: "work"
  },
  {
    title: "DoughFlow",
    description: "Co-developing a finance web app focused on stock market education and paper trading, using Postgres, Django, and Next.js, with Docker for environment management. Project is in progress.",
    type: "personal"
  },
  {
    title: "UI/UX Honors Thesis Research Study",
    description: "Exploring innovative UI/UX methods for web content presentation, utilizing Next.js, Django, and NGINX. Employs data analysis with Pandas and Python to improve web design practices. Currently ongoing.",
    type: "personal"
  },
  {
    title: "This Portfolio Website",
    description: "Developed with Next.js and NGINX on an EC2 instance, using Docker for service management. Showcases secure and efficient static site generation and hosting.",
    type: "personal"
  }
];

const ProjectsSection = () => {
  return (
    <div className="mx-auto max-w-4xl p-4 rounded-xl border-4 border-purple-600 my-4">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4 p-4 rounded-xl border-4 border-purple-600 mx-4 my-2">
          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className='mb-4'>
            {project.description}
          </p>
          <div className={`flex ${project.type === 'work' ? 'flex-col md:flex-row' : ''} justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0`}>
            <p className="flex-1">Type: {project.type.charAt(0).toUpperCase() + project.type.slice(1)}</p>
          </div>
        </div>
      ))}
      <div className="text-center mt-8">
        <Link href="/projects" className="text-purple-600 hover:underline">
          View Project Details
        </Link>
      </div>
    </div>  );
};

export default ProjectsSection;

