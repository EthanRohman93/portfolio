'use client';
import React, { useState, FC } from 'react';
import RSIPopup from '../components/RSIPopup'; // Ensure the path is correct

const ExperiencePage: FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const popupStyle = "absolute left transform -translate-x-1/2 mt-1"; // Centers the popup below the "RSI" text with a slight margin

  return (
      <div className="relative p-4">
        <h1 className="text-2xl font-bold">Indicators</h1>
        <div className="mt-4 relative">
          <h2 
            className="text-xl font-semibold cursor-pointer relative" // The "RSI" text is positioned relatively to anchor the absolutely positioned popup
            onMouseEnter={() => setShowPopup(true)} 
            onMouseLeave={() => setShowPopup(false)}
          >
            RSI
          </h2>
          {showPopup && (
            <div className={popupStyle}>
              <RSIPopup />
            </div>
          )}
        </div>
      </div>
  );
};

export default ExperiencePage;

