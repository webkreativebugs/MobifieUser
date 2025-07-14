import React from 'react'
import Sidebar from '../components/sidebar_components/Sidebar'
import { useTheme } from '../../../context/AppContext';
import Navbar from '../../../common/components/Navbar';
import DashboardData from '../components/common/DashboardData';
const Dashboard = () => {
    const { onThemeChange } = useTheme();
  return (
    <>
        <Navbar onThemeChange={onThemeChange} />
    <div className='app-container flex '>
 
      <Sidebar/>
      <div className=' w-full' >
       <DashboardData/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
