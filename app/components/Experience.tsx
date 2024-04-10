import Image from 'next/image';
import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Image src="/images/surest.png" alt="Drake University Logo" width={150} height={150} className="rounded-full" />
      <h2 className="text-lg font-bold mt-4">Experience</h2>
      <p>Surest: A United Health Group Company - Data Science Intern</p>
      <p>May 2022 – April 2024</p>
    </div>
  );
};

export default ExperienceSection;
