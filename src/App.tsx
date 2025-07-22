import './App.css'
import { useTheme } from './context/AppContext'
import AuthRoutes from './routes/AuthRoutes'
export default function App() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
 const {theme} =useTheme()

//  isLoggedIn
  return (
    <>
     <section className={theme} >
      
     <AuthRoutes/>
    </section>
    </>
  )
}

// processLoggedInUser(role){

//   role == admin {
//     <AdminRoutes
//   }else 
//     role 

//     else role 

//     else 
//       <Auth></Auth>
// }