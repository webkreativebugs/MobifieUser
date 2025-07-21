import './App.css'
import { useTheme } from './context/AppContext'
import WebsiteRoutes from './routes/WebsiteRoutes'
export default function App() {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = "hidden";
  }
 const {theme} =useTheme()
  return (
    <>
     <section className={theme} >
     <WebsiteRoutes/>
    </section>
    </>
  )
}
