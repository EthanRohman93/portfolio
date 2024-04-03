import React from 'react';
import Layout from './layout'; // Adjust the import path as necessary
import EducationSection from './components/education';
import PersonalSection from './components/personal';
import ProjectSection from './components/project';

const MainPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to My Portfolio</h1>
        <EducationSection />
        <ProjectSection />
        <PersonalSection />
        {/* Any additional sections can be added here */}
      </main>
    </Layout>
  );
};

export default MainPage;

