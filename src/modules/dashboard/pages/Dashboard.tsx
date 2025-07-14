import React from 'react'
import Sidebar from '../components/sidebar_components/Sidebar'
import { useTheme } from '../../../context/AppContext';
import Navbar from '../../../common/components/Navbar';

const Dashboard = () => {
    const { onThemeChange } = useTheme();
  return (
    <>
        <Navbar onThemeChange={onThemeChange} />
    <div className='app-container'>
 
      <Sidebar/>
    </div>
    </>
  )
}

export default Dashboard
