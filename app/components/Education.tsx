import Image from 'next/image';
import React from 'react';

const EducationSection = () => {
  return (
    <div id='edu' className="flex flex-col items-center text-center p-4">
      <Image src="/images/Drake.png" alt="Drake University Logo" width={150} height={150} className="rounded-full" />
      <h2 className="text-lg font-bold mt-4">Education</h2>
      <p>Drake University - Bachelor of Science in Computer Science</p>
      <p>GPA: 3.85 (Aug. 2020 – May 2024)</p>
    </div>
  );
};

export default EducationSection;
