'use client'
import React, { FC } from 'react';

const RSIPopup: FC = () => {
  return (
    <div>
        <div style={{
          position: 'absolute',
          width: '300px',
          padding: '10px',
          border: '2px solid lightgreen', // Light green border
          backgroundColor: '#013220', // Very dark green background
          color: 'white', // White text
          borderRadius: '8px', // Rounded corners
          zIndex: 100,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow for depth
        }}>
          <p>The RSI is a momentum indicator in technical analysis, measuring speed and change of price movements on a scale from 0 to 100. It identifies overbought (>70) or oversold (<30) conditions in security prices.</p>
        </div>
    </div>
  );
};

export default RSIPopup;

