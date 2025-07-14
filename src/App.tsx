import React , {useEffect,useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import EmailPasswordSignIn from './modules/auth/signIn/email-password/page'
import ForgetPasswordPage from './modules/auth/forgetPassword/page'
import LandingPage from './modules/landingpage/page'
import OtpPage from './modules/auth/signIn/otp/page'
import Dashboard from './modules/dashboard/pages/Dashboard'
import { useTheme } from './context/AppContext'

function App() {
 const {theme , onThemeChange} =useTheme()
  return (
    <section className={theme} >
    <Routes>
      <Route path="/" element={<LandingPage  />} />
      <Route path="/login" element={<EmailPasswordSignIn />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
      
    </section>
  )
}

export default App
