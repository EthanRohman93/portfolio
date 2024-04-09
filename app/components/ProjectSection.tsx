import React from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <div className="mx-auto max-w-4xl p-4 rounded-xl border-4 border-purple-600">
      <h2 className="text-xl font-bold mb-4">Projects</h2>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">UnitedHealth Group (Surest: A UnitedHealth Care Company)</h3>
        <p>Data Science Intern | Minneapolis, MN | May 2022 - May 2024</p>
        <ul className="list-disc ml-6">
          <li>Data Analysis: Conducted a comprehensive analysis of text message campaigns to assess engagement increases, utilizing Python, Pandas, and SQL for data manipulation and analysis.</li>
          <li>Machine Learning: Developed a question-answer bot using sentence transformers and built a vector store with a custom embedding model for enhancing search capabilities, managed deployment with MLflow, and fine-tuned chat models for suggesting answers to partial questions.</li>
          <li>Search Engine Improvement: Designed extension of search feature using embedding models, including building a custom vector store for improved search results and user experience.</li>
          <li>Interactive Development: Solved for creating and testing with local instances of Elasticsearch to fine-tune search parameters.</li>
          <li>Data Engineering: Contributed to complex pyspark pipelines in Databricks and Ascend, including interacting with AWS S3, employing GitHub for source control and automation in Jenkins.</li>
          <li>Presentations: Formally presented findings and projects to groups as large as 40, demonstrating strong communication skills and the ability to translate complex technical details into business insights.</li>
          <li>Agile Methodologies: Experienced in Agile development methodologies, actively participating in sprints, managing stories in Jira, and utilizing Notion for project documentation and collaboration.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Group Senior Project</h3>
        <p>Drake University | Current</p>
        <ul className="list-disc ml-6">
          <li>Finance Web Application: Collaborating on a finance web application using a PostgreSQL, Django, and Next.js tech stack, focusing on developing robust backend and frontend components as part of a team project. Utilized Jira for sprint planning and tracking, and Lucidchart for workflow diagrams.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Individual Senior Project</h3>
        <p>Drake University | Current</p>
        <ul className="list-disc ml-6">
          <li>UI/UX Study: Conducting a UI/UX study as a solo project, using three web applications (calculator, form submission, informational document) to test various UI/UX components and identify combinations that enhance user experience through methodical testing and analysis. Used Figma for UI/UX design mockups and for prototype testing.</li>
        </ul>
      </div>

      <div className="text-center">
        <Link href="/project" className="text-purple-600 hover:underline">
            View Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
