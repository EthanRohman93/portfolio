import React from 'react';
import Layout from './layout'; // Adjust the import path as necessary
import EducationSection from './components/education';
import PersonalSection from './components/personal';
import Link from 'next/link';

const MainPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to My Portfolio</h1>
        <EducationSection />
        <PersonalSection />
        <Link href="/projects">View Projects</Link> {/* Add this line */}
        {/* Any additional sections can be added here */}
      </main>
    </Layout>
  );
};

export default MainPage;

