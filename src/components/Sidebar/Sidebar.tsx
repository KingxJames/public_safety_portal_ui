// Sidebar.tsx
import React from 'react';
import "./Sidebar.css";
import Home from "../../components/Icons/home.png";
import Message from "../../components/Icons/message.png";
import Users from "../../components/Icons/friends.png";
import Report from "../../components/Icons/Report a problem.png";
import Setting from "../../components/Icons/settings(1).png";


interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="mainSidebarContainer">
      <div>
        <div className='adminContainer'>
          <h1 className='adminText'>Admin</h1>
      </div>

        <ul className='ulContainer'>
          <h4 className='menu'>Admin Portal</h4>
          <li className='liContainer'>
            <img src={`${Home}`} className='sidebarIcon' alt="" />
            <p className='itemNames'>Dashboard</p>
          </li>

          <li className='liContainer'>
            <img src={`${Message}`} className='sidebarIcon' alt="" />
            <p className='itemNames'>Messages</p>
          </li>

          <li className='liContainer'>
            <img src={`${Users}`} className='sidebarIcon' alt="" />
            <p className='itemNames'>Users</p>
          </li>

          <li className='liContainer'>
            <img src={`${Report}`} className='sidebarIcon' alt="" />
            <p className='itemNames'>Reports</p>
          </li>

          <li className='liContainer'>
            <img src={`${Setting}`} className='sidebarIcon' alt="" />
            <p className='itemNames'>Settings</p>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default Sidebar;