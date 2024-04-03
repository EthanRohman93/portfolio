import React from 'react';
import Layout from '../layout'; // Adjust the import path as needed

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Experience</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Company Name</h2>
          <p className="italic">Role - Dates Employed</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Brief description of your role and responsibilities.</li>
            <li>Another point about your work experience.</li>
          </ul>
        </div>
        {/* Add more experiences as needed */}
      </div>
    </Layout>
  );
};

export default ExperiencePage;
