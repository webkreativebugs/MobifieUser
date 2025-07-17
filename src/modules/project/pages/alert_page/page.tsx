import Navbar from '../../../../components_module/common_component/Navbar';
import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../dashboard/components/sidebar_components/Sidebar';
import AlertPage from '../../../../components_module/common_component/dynamic_table/pages/AlertsPage';
function page() {
   const { onThemeChange } = useTheme();
  return (
    <>
        <Navbar onThemeChange={onThemeChange} />
    <div className='app-container flex '>
 
      <Sidebar active={"Alerts"}/>
      <div className=' w-full' >
        <AlertPage/>
      </div>
    </div>
    </>
  )
}

export default page
