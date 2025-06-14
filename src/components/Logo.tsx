import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 bg-[#79B93C] rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">M</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#6aa533] rounded-full"></div>
      </div>
      <span className="ml-3 text-2xl font-bold text-gray-800">Mobifie</span>
    </div>
  );
};

export default Logo; 