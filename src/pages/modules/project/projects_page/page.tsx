import React from 'react'
import Navbar from '../../../../components/common_component/Navbar';
import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../../../components/common_component/Sidebar';
// import ProjectsPage from '../../../../components_module/common_component/dynamic_table/pages/ProjectPage';
function page() {
   const {theme, onThemeChange } = useTheme();
  return (
    <>
      
    <div className='app-container flex '>
 
      <Sidebar active={"Projects"}/>
      <div className=' w-full' >
          <Navbar theme={theme} onThemeChange={onThemeChange} />
          <div className='p-3 w-full h-fit hide-scrollbar overflow-scroll max-h-screen '>
            <div>
              <div className='mt-2'><h1 className="table-heading">Project Settings</h1></div>
              <div><p></p></div>
              <div className='p-3 gap-3 flex flex-col '>
                <div className='w-full flex gap-3'>  {/*  project description */}
                  <div className='w-1/3 rounded-md shadow-md bg-white h-[10rem]'>  </div>  {/*  project id*/}
                  <div  className='w-1/3 rounded-md shadow-md bg-white h-[10rem]'></div>  {/*  project name*/}
                  <div  className='w-1/3 rounded-md shadow-md bg-white h-[10rem]'></div>  {/*  project time zone*/}
                </div>
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/*  tags */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/*  Collect Database Specific Statistics */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/* Backup Compliance Policy */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/* Multiple Regionalized Private Endpoints */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   { /* Specify your Maintenance Window */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/* Project Overview */}
                <div className='w-full rounded-md shadow-md bg-white h-[10rem]'></div>   {/* Atlas Security Quickstart */}
               
              </div> 
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default page
