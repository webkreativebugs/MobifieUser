import './App.css'
// import AlertsPage from './components_module/common_component/dynamic_table/pages/AlertsPage'
// import ProjectsPage from "./components_module/common_component/dynamic_table/pages/ProjectPage";
import { Routes, Route } from 'react-router-dom'
import EmailPasswordSignIn from './pages/auth/signIn/email-password/page'
import ForgetPasswordPage from './pages/auth/forgetPassword/page'
// import LandingPage from './modules/landingpage/page'
import OtpPage from './pages/auth/signIn/otp/page'
import Alert from './pages/modules/project/alert_page/page'
import { useTheme } from './context/AppContext'
import Projects from './pages/modules/project/projects_page/page'
export default function App() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }

 const {theme} =useTheme()
//  console.log(theme);
 
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
