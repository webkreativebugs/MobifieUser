import './App.css'
import { useTheme } from './context/AppContext'
import AuthRoutes from './routes/AuthRoutes'
import AdminRoutes from './routes/AdminRoutes';
import { useauth } from './context/auth_context/AuthContext';
import { decoder } from './utils/JwtDecoder';
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
const token=sessionStorage.getItem('token')
if(token)
{
  
 if( role == decoder(token)  ) {
   return (<AdminRoutes/>)
  }
}
    else 
    {
      console.log(sessionStorage,role);
      
    return (<AuthRoutes/>)
    }
}