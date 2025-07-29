import Navbar from '../../../../components/common_component/Navbar';
// import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../../../components/common_component/Sidebar';
import AlertPage from '../../../../components/common_component/dynamic_table/pages/AlertsPage';
function page() {
  //  const {theme, onThemeChange } = useTheme();
  return (
    <>
    
    <div className='app-container flex '>
 
      <Sidebar active={"Alerts"}/>
      <div className=' w-full' >
        <Navbar />
        <AlertPage/>
      </div>
    </div>
    </>
  )
}

export default page
