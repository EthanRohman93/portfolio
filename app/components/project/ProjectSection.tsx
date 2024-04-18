'use client'
import React from 'react';
import ProjectDesc from './ProjectDesc';

const projects = [
  {
    title: "This Portfolio Website",
    includeBorder: true,
    id: "portfolio",
    content: "Developed with <strong>Next.js</strong> and <strong>NGINX</strong> on an <strong>EC2</strong> instance, using <strong>Docker</strong> containers for streamlined service management and deployment. This setup leverages <strong>HTTPS</strong> for secure connections, with static site generation offering optimized performance across devices. The architecture includes dynamic routing to efficiently handle project pages with code snippets and details, showcasing both flexibility and scalability.",
    href: "/project/portfolio",
    linkContent: "View Portfolio Details"
  },
  {
    title: "Text Message Marketing Campaign Analysis",
    includeBorder: true,
    id: "marketing-analysis",
    content: "Analyzed user login and interaction data using <strong>Python</strong>, <strong>Pandas</strong>, <strong>SQL</strong> (with CTEs), and <strong>ggplot2</strong>. Aimed to measure the effectiveness of a marketing campaign in re-engaging users. Presented findings to over 50 stakeholders, demonstrating campaign success.",
    href: "/project/marketing-analysis",
    linkContent: "View Marketing Analysis Details"
  },
  {
    title: "Search Comparison and Improvement",
    includeBorder: true,
    id: "search",
    content: "Integrated <strong>Hugging Face</strong> sentence transformers with <strong>Chroma</strong> for custom embedding models, compared against <strong>ElasticSearch</strong> with tuned fuzzy matching. Achieved comparable performance, enhancing search capabilities and user experience.",
    href: "/project/search",
    linkContent: "View Search Research Details"
  },
  {
    title: "Deterministic Answer Bot",
    includeBorder: true,
    id: "answer-bot",
    content: "Implemented a bot using <strong>Hugging Face</strong>'s models, with <strong>MLflow</strong> for management and <strong>Databricks</strong> for hosting. Delivered immediate, reliable customer service responses.",
    href: "/project/answer-bot",
    linkContent: "View Bot Details"
  },
  {
    title: "Data Pipelining",
    includeBorder: true,
    id: "data-pipelining",
    content: "Enhanced large data pipelines with <strong>Databricks</strong> and <strong>Ascend</strong>, employing <strong>PySpark</strong> for data processing and <strong>Jenkins</strong> for CI/CD, contributing to a substantial codebase.",
    href: "/project/data-pipelining",
    linkContent: "View Pipelining Details"
  },
  {
    title: "DoughFlow",
    includeBorder: true,
    id: "doughflow",
    content: "Co-developing a finance web app focused on stock market education and paper trading, using <strong>Postgres</strong>, <strong>Django</strong>, and <strong>Next.js</strong>, with <strong>Docker</strong> for environment management. This project is in progress.",
    href: "/project/doughflow",
    linkContent: "View DoughFlow Details"
  },
  {
    title: "UI/UX Honors Thesis Research Study",
    includeBorder: true,
    id: "thesis",
    content: "Exploring innovative UI/UX methods for web content presentation, utilizing <strong>Next.js</strong>, <strong>Django</strong>, and <strong>NGINX</strong>. Employs data analysis with <strong>Pandas</strong> and <strong>Python</strong> to improve web design practices. Currently ongoing.",
    href: "/project/thesis",
    linkContent: "View UI/UX Details"
  },
];


const ProjectSection = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectDesc
          key={index}
          title={project.title}
          includeBorder={project.includeBorder}
          id={project.id}
          content={project.content}
        />
      ))}
    </div>  
  );
};

export default ProjectSection;
