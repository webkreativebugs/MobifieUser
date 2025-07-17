import './App.css'
// import AlertsPage from './components_module/common_component/dynamic_table/pages/AlertsPage'
// import ProjectsPage from "./components_module/common_component/dynamic_table/pages/ProjectPage";
import { Routes, Route } from 'react-router-dom'
import EmailPasswordSignIn from './auth_module/signIn/email-password/page'
import ForgetPasswordPage from './auth_module/forgetPassword/page'
// import LandingPage from './modules/landingpage/page'
import OtpPage from './auth_module/signIn/otp/page'
import Alert from './modules/project/pages/alert_page/page'
import { useTheme } from './context/AppContext'
import Projects from './modules/project/pages/projects_page/page'
export default function App() {
 const {theme} =useTheme()
  return (
    <>
     <section className={theme} >
    <Routes>
      {/* <Route path="/" element={<LandingPage  />} /> */}
      <Route path="/login" element={<EmailPasswordSignIn />} />
      <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/alerts" element={<Alert />} />
      {/* <Route path="/dashboard/projects" element={<Dashboard />} /> */}
    </Routes>
      
    </section>
    {/* <AlertsPage />
    <ProjectsPage /> */}
      {/* <div cla/ssName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}
