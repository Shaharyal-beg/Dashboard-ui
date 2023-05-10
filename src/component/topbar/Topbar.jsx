import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';



const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
               <span className='logo'>DASHBORAD</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconsContainer"></div>
                <NotificationsIcon/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconsContainer"></div>
                <LanguageIcon/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconsContainer"></div>
                <SettingsIcon/>
                <span className="topIconBadge">2</span>
            </div>

        
  )
}

export default Topbar