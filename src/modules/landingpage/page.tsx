'use client';

import React, { useEffect, useState } from 'react';
import { checkdomain } from '../../../network/public/domain/CheckDomain.api';
import { VerifyDomainResponse } from '../../../network/public/domain/CheckDomain.interface';
import { useNavigate } from 'react-router-dom';

import Logo from '../../components_module/common_component/Logo';
const LandingPage = ({setTheme}:any) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
 const [planData, setPlanData] = useState<VerifyDomainResponse>();


    // alert("Hello")

  const handleapi=async()=>
  {
checkdomain((response: VerifyDomainResponse | null, error: any) => {
  if (response) {
    console.log("apicalllContext", response);
    setPlanData(response);
  } else {
    console.error("API Error:", error);
  }
});
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(timer);
  //         navigate('/login');
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [navigate]);

  return (
    <>
  
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
          onClick={ handleapi}
          className="text-[#79B93C] hover:text-[#6aa533] font-medium"
        >
          Click here to skip
        </button>
   
      </div>
    </div>
    </>
  );
};

export default LandingPage; 