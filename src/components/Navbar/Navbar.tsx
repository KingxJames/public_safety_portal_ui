// Navbar.tsx
import React, { Profiler } from 'react';
import "./Navbar.css";
import Search from "../../components/Icons/Search.png";
import Profile from "../../components/Icons/boy.jpg"
import Notifications from "../../components/Icons/Notifications.png"

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="mainNavbarContainer">
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className="searchItemsContainer">
          <img src={`${Search}`} className="searchIcon" alt="" />
          <input type="search" />
        </div>
        <div className="profileItemsContainer">
          <img src={`${Notifications}`} className="notificationIcon" alt="" />
          <div className="profileItems">
            <img src={`${Profile}`} className="profileIcon" alt="" />
            <p>James Faber</p>
          </div>
        </div>
    </div>
  );
};

export default Navbar;