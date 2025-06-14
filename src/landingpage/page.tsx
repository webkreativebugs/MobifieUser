'use client';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
const LandingPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Logo />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 mb-4">
          Redirecting to login page in {countdown} seconds...
        </p>
        <button
          onClick={() => navigate('/login')}
          className="text-[#79B93C] hover:text-[#6aa533] font-medium"
        >
          Click here to skip
        </button>
      </div>
    </div>
  );
};

export default LandingPage; 