import './App.css'
import { useTheme } from './context/AppContext'
import AuthRoutes from './routes/AuthRoutes'
import AdminRoutes from './routes/AdminRoutes';
import { useauth } from './context/auth_context/AuthContext';
import { decoder } from './utils/JwtDecoder';
import AuthMe from './utils/api/AuthMe';
import { useEffect } from 'react';
import {AccessType} from '../enum/AccessType.enum'
export default function App() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
 const {theme} =useTheme()
 const {role,onRoleChange}= useauth()
  //  useEffect(() => {
  //    if (role) {
  //      AuthMe(onRoleChange);
  //    }
  //  },[role]);
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
  // sessionStorage.clear()
  const Role=decoder(role)
  // console.log(role);
  
  if(Role)
  {
 if( Role == AccessType.ADMIN ) {
   return (<AdminRoutes/>)
  }
  }
    else 
    {
      console.log(sessionStorage,role);
      
    return (<AuthRoutes/>)
    }
}