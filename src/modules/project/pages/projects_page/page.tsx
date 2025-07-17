import React from 'react'
import Navbar from '../../../../components_module/common_component/Navbar';
import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../dashboard/components/sidebar_components/Sidebar';
import ProjectsPage from '../../../../components_module/common_component/dynamic_table/pages/ProjectPage';
function page() {
   const { onThemeChange } = useTheme();
  return (
    <>
        <Navbar onThemeChange={onThemeChange} />
    <div className='app-container flex '>
 
      <Sidebar active={"Projects"}/>
      <div className=' w-full' >
        <ProjectsPage/>
      </div>
    </div>
    </>
  )
}

export default page
