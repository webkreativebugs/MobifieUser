import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmailPasswordSignIn from './auth/signIn/email-password/page'
import ForgetPasswordPage from './auth/forgetPassword/page'
import LandingPage from './landingpage/page'
import OtpPage from './auth/signIn/otp/page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<EmailPasswordSignIn />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
    </Routes>
  )
}

export default App
