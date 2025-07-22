import Navbar from '../../../../components/common_component/Navbar';
import { useTheme } from '../../../../context/AppContext';
import Sidebar from '../../../../components/common_component/Sidebar';
import { useauth } from '../../../../context/auth_context/AuthContext';
// import ProjectsPage from '../../../../components_module/common_component/dynamic_table/pages/ProjectPage';
function page() {
   const {onRoleChange} = useauth()
   const {theme, onThemeChange } = useTheme();
  return (
    <>
      
    <div className='app-container flex'>
 
      <Sidebar active={"Projects"}/>
      <div className=' w-full' >
          <Navbar theme={theme} onThemeChange={onThemeChange} />
          <div className='p-3 w-full h-fit hide-scrollbar overflow-scroll max-h-[90vh] '>
            <div>
              <div className='mt-2'><h1 className="table-heading">Project Settings</h1></div>
              <div><p></p></div>
              <div className='p-3 gap-3 flex flex-col '>
                <div className='w-full flex gap-3'>  {/*  project description */}
                  <div className='w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]'> 
                       <div>
                         <h3>Project ID</h3>
                         <p></p>
                       </div>
                       <div>

                       </div>
                  </div>  {/*  project id*/}
                  <div className='w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]'></div>  {/*  project name*/}
                  <div className='w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]'></div>  {/*  project time zone*/}
                </div>
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/*  tags */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/*  Collect Database Specific Statistics */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/* Backup Compliance Policy */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/* Multiple Regionalized Private Endpoints */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   { /* Specify your Maintenance Window */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/* Project Overview */}
                <div className='w-full rounded-[20px] shadow-md bg-white h-[8rem]'></div>   {/* Atlas Security Quickstart */}
               <button onClick={()=>{onRoleChange("auth")}}> Change </button>
              </div> 
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default page
