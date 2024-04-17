import React from 'react';
import Layout from './layout';
import EducationSection from './components/Education';
import PersonalSection from './components/Personal';
import HeroDisplay from './components/hero/HeroDisplay';
import Technologies from './components/technologies/Tech';
import RohmanC from './components/overlay/RohmanCorner';
import HeroDesc from './components/hero/HeroDesc';
import ProjectsSection from './components/project/ProjectSection';
import ExperienceSection from './components/Experience';
import PortDesc from './components/portfolio/PortfolioDesc';
import SectionTitle from './components/SectionTitle';

const MainPage = () => {
  return (
    <Layout>
      <main className="safe-top">
        <RohmanC />
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-4xl mt-14 md:space-y-0 md:space-x-6">
          <div className="flex flex-col">
            <HeroDisplay />
            <HeroDesc />
          </div>
          <Technologies className="w-full md:w-auto"/>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-6 mt-6 max-w-4xl mx-auto">
            <EducationSection />
            <ExperienceSection />
        </div>
        <SectionTitle title='Relevent Projects' size={3} includeBorder={true} />
        <PortDesc />       
        <ProjectsSection />
        <PersonalSection />
      </main>
    </Layout>
  );
};

export default MainPage;

