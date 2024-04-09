import React from 'react';
import Layout from './layout';
import EducationSection from './components/Education';
import PersonalSection from './components/Personal';
import HeroDisplay from './components/HeroDisplay';
import Technologies from './components/Tech';
import RohmanC from './components/RohmanCorner';
import HeroDesc from './components/HeroDesc';
import ProjectsSection from './components/ProjectSection';

const MainPage = () => {
  return (
    <Layout>
      <main className="safe-top">
        <RohmanC />
        <div className="flex justify-center items-center mt-14">
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 max-w-4xl mx-auto'>
              <HeroDisplay />
              <HeroDesc />
          </div>
        </div>
        <Technologies />
        <ProjectsSection />
        <EducationSection />
        <PersonalSection />
      </main>
    </Layout>
  );
};

export default MainPage;

