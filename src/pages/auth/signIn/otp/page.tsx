'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../../components/common_component/Logo';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailMode, setIsEmailMode] = useState(true);
  const [validationErrors, setValidationErrors] = useState({
    contact: '',
    otp: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile: string) => {
    // Allows formats: +91XXXXXXXXXX, XXXXXXXXXX, XXX-XXX-XXXX
    const mobileRegex = /^(\+91[\s-]?)?[0-9]{10}$/;
    return mobileRegex.test(mobile);
  };

  const validateContact = () => {
    if (!contact.trim()) {
      setValidationErrors(prev => ({
        ...prev,
        contact: `${isEmailMode ? 'Email' : 'Mobile number'} is required`
      }));
      return false;
    }

    if (isEmailMode && !validateEmail(contact)) {
      setValidationErrors(prev => ({
        ...prev,
        contact: 'Please enter a valid email address'
      }));
      return false;
    }

    if (!isEmailMode && !validateMobile(contact)) {
      setValidationErrors(prev => ({
        ...prev,
        contact: 'Please enter a valid 10-digit mobile number'
      }));
      return false;
    }

    setValidationErrors(prev => ({
      ...prev,
      contact: ''
    }));
    return true;
  };

  const validateOtp = () => {
    if (!otp.trim()) {
      setValidationErrors(prev => ({
        ...prev,
        otp: 'OTP is required'
      }));
      return false;
    }

    if (otp.length !== 6) {
      setValidationErrors(prev => ({
        ...prev,
        otp: 'OTP must be 6 digits'
      }));
      return false;
    }

    if (!/^\d+$/.test(otp)) {
      setValidationErrors(prev => ({
        ...prev,
        otp: 'OTP must contain only numbers'
      }));
      return false;
    }

    setValidationErrors(prev => ({
      ...prev,
      otp: ''
    }));
    return true;
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContact(value);
    // Clear validation error when user starts typing
    if (validationErrors.contact) {
      setValidationErrors(prev => ({
        ...prev,
        contact: ''
      }));
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setOtp(value);
    // Clear validation error when user starts typing
    if (validationErrors.otp) {
      setValidationErrors(prev => ({
        ...prev,
        otp: ''
      }));
    }
  };

  const handleSendOtp = async () => {
    if (!validateContact()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Replace with your actual OTP sending API call
      // const response = await fetch('/api/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ contact, method: isEmailMode ? 'email' : 'mobile' }),
      // });

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsOtpSent(true);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateOtp()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Replace with your actual OTP verification API call
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ otp, contact }),
      // });

      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/'); // Navigate to home page on success
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  const toggleMode = () => {
    setIsEmailMode(!isEmailMode);
    setContact('');
    setOtp('');
    setIsOtpSent(false);
    setValidationErrors({
      contact: '',
      otp: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="text-center">
          <Logo />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Verify Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your {isEmailMode ? 'email' : 'mobile number'} to receive OTP
          </p>
        </div>

        <form onSubmit={handleVerifyOtp} className="space-y-6">
          {/* Toggle Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={toggleMode}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79B93C] transition-all duration-200"
            >
              <svg className={`h-4 w-4 mr-1.5 ${isEmailMode ? 'text-[#79B93C]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className={isEmailMode ? 'text-[#79B93C]' : 'text-gray-400'}>Email</span>
              <div className="mx-2 h-4 w-px bg-gray-300"></div>
              <svg className={`h-4 w-4 mr-1.5 ${!isEmailMode ? 'text-[#79B93C]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className={!isEmailMode ? 'text-[#79B93C]' : 'text-gray-400'}>Mobile</span>
            </button>
          </div>

          {/* Contact Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isEmailMode ? 'Email Address' : 'Mobile Number'}
            </label>
            <input
              type={isEmailMode ? 'email' : 'tel'}
              value={contact}
              onChange={handleContactChange}
              placeholder={isEmailMode ? 'Enter your email' : 'Enter your mobile number'}
              className={`block w-full px-4 py-3 text-lg border ${
                validationErrors.contact ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-[#79B93C] focus:border-[#79B93C] transition-all duration-200`}
            />
            {validationErrors.contact && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.contact}</p>
            )}
          </div>

          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter 6-digit OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              disabled={!isOtpSent}
              className={`block w-full px-4 py-3 text-center text-lg font-semibold border ${
                validationErrors.otp ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-[#79B93C] focus:border-[#79B93C] transition-all duration-200 ${
                !isOtpSent ? 'bg-gray-100 cursor-not-allowed' : ''
              }`}
            />
            {validationErrors.otp && (
              <p className="mt-1 text-sm text-red-500">{validationErrors.otp}</p>
            )}
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <button
              type={isOtpSent ? 'submit' : 'button'}
              onClick={isOtpSent ? undefined : handleSendOtp}
              disabled={isLoading || (isOtpSent && otp.length !== 6)}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#79B93C] hover:bg-[#6aa533] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79B93C] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isOtpSent ? 'Verifying...' : 'Sending...'}
                </div>
              ) : (
                isOtpSent ? 'Verify OTP' : 'Send OTP'
              )}
            </button>

            <button
              type="button"
              onClick={handleBack}
              className="w-full text-sm font-medium text-[#79B93C] hover:text-[#6aa533] focus:outline-none focus:underline transition-colors"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
