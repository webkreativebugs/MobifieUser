import { Routes, Route } from 'react-router-dom'
import EmailPasswordSignIn from '../pages/auth/signIn/email-password/page'
import ForgetPasswordPage from '../pages/auth/forgetPassword/page'
import OtpPage from '../pages/auth/signIn/otp/page'
import Alert from '../pages/modules/project/alert_page/page'
import Projects from '../pages/modules/project/projects_page/page'

function WebsiteRoutes() {
  return (
      <Routes>
      {/* <Route path="/" element={<LandingPage  />} /> */}
      <Route path="/login" element={<EmailPasswordSignIn />} />
      <Route path="/login" element={<EmailPasswordSignIn />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/alerts" element={<Alert />} />
      {/* <Route path="/dashboard/projects" element={<Dashboard />} /> */}
    </Routes>
  )
}

export default WebsiteRoutes
