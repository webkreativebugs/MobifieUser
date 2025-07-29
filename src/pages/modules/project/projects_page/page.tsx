import Navbar from '../../../../components/common_component/Navbar';
import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../../../components/common_component/Sidebar';
import ThemePicker from '../../../../components/module/org_component/theme_component/ThemePicker';
// import ProjectsPage from '../../../../components_module/common_component/dynamic_table/pages/ProjectPage';
function page() {
  //  const {onRoleChange} = useauth()
   const {theme, onThemeChange } = useTheme();
   
  return (
    <>
    <div className='custom-container flex bg-primary'>
 
      <Sidebar active={"Projects"}/>
      <div className=' w-full' >
          <Navbar theme={theme} onThemeChange={onThemeChange} />
          <div className='p-3 w-full h-fit hide-scrollbar overflow-scroll max-h-[90vh] '>
          {/* <ThemePicker/> */}
          </div>
      </div>
    </div>
    </>
  )
}

export default page
