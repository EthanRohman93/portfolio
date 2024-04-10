'use client'
import React from 'react';

const RohmanC: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed top-0 left-0 m-3 p-1 bg-purple-600 rounded-xl cursor-pointer"
      onClick={handleClick}
    >
      <h2>Rohman</h2>
    </div>
  );
};

export default RohmanC;

