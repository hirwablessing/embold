import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
    return (
        <div className="sidebar z-10 bg-white shadow-lg w-16 flex flex-col gap-6 items-center pt-10" >
            <SearchIcon/>
            <HomeIcon/>
            <TimelineIcon/>
            <GroupIcon/>
            <SettingsIcon/>
            
        </div>
    )
}

export default Sidebar
