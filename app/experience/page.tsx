'use client'
import React, { useState, FC } from 'react';
import RSIPopup from '../components/RSIPopup';

const ExperiencePage: FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
      <div className="p-4" style={{ position: 'relative' }}>
        <h1 className="text-2xl font-bold">Experience</h1>
        <div className="mt-4">
          <h2 
            className="text-xl font-semibold" 
            onMouseEnter={() => setShowPopup(true)} 
            onMouseLeave={() => setShowPopup(false)}
          >
            Company Name
          </h2>
          {showPopup && <RSIPopup />}
          <p className="italic">Role - Dates Employed</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Brief description of your role and responsibilities.</li>
            <li>Another point about your work experience.</li>
          </ul>
        </div>
        {/* Add more experiences as needed */}
      </div>
  );
};

export default ExperiencePage;

