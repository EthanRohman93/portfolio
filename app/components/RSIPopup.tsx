'use client';

import React, { FC } from 'react';

const RSIPopup: FC = () => {
  return (
    <div className="absolute w-72 p-2.5 border-2 border-green-200 text-white rounded-lg z-10 shadow-md"
         style={{ backgroundColor: '#002B36' }}> {/* Darker green background */}
      <p className="text-sm">
        The RSI is a momentum indicator in technical analysis, measuring speed and change of price movements on a scale from 0 to 100. It identifies overbought (&gt;70) or oversold (&lt;30) conditions in security prices.
      </p>
    </div>
  );
};

export default RSIPopup;

