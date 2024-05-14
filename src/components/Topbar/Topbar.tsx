// Topbar.tsx
import React from 'react';
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import UbLogo from './../../components/Icons/UB_Logo.png';
import ProfilePic from './../../components/Icons/boy.png';


interface TopbarProps {

}

export const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div>
         <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span><img className="logo" src={UbLogo} alt="Logo"/></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ProfilePic} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Topbar;