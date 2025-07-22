import './App.css'
import { useTheme } from './context/AppContext'
import AuthRoutes from './routes/AuthRoutes'
import AdminRoutes from './routes/AdminRoutes';
import { useauth } from './context/auth_context/AuthContext';
export default function App() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
 const {theme} =useTheme()
 const {role}= useauth()
//  isLoggedIn
  return (
    <>
     <section className={theme} >
   { processLoggedInUser(role)}
     
    </section>
    </>
  )
}

function processLoggedInUser(role:string){

 if( role == "admin") {
   return (<AdminRoutes/>)
  }

    else 
    return (<AuthRoutes/>)
}