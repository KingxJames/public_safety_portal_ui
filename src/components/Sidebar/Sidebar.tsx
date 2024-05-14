// Sidebar.tsx
import React from 'react';
import "./Sidebar.css";
// import { faHome, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';
// import { LuLayoutDashboard } from "react-icons/lu";
// import {faClockRotateLeft, faHeart, faLaptopCode, faBookmark, faCartShopping, faCog } from '@fortawesome/free-solid-svg-icons';
// import { FaRegMessage } from "react-icons/fa6";
// import { LiaUserSolid } from "react-icons/lia";
// import { TbReportSearch } from "react-icons/tb";
// import { IoSettingsOutline } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming you're using React Icons for the hamburger icon
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = () => {

  return (
/* <div className="sidebar">
  <div className="sidebar-header">
    <div>
      <h3 className="adminText">Admin Portal</h3>
    </div>
    <div>
      <i className="hamburger-icon"><RxHamburgerMenu /></i>
    </div>
  </div>
  <hr></hr>

  <ul className="nav-list">
    <li>
      <a href="#">
        <i><LuLayoutDashboard /></i>
        <span className="link-name">Dashboard</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Dashboard</a></li>
      </ul>
    </li>




    
    <li>
      <div className="icon-link">
        <a href="#">
        <i > < FaRegMessage /></i>
          <span className="link-name">Messages</span>
        </a>
      </div>

      <ul className="sub-menu">
        <li><a href="#" className="link-name">Messages</a></li>
        <li><a href="#">Anonymous Tips</a></li>
        <li><a href="#">Emergencies</a></li>
      </ul>
    </li>











    <li>
      <a href="#">
        <i><LiaUserSolid /></i>
        <span className="link-name">Users</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Users</a></li>
      </ul>
    </li>


    <li>
      <a href="#">
        <i><TbReportSearch /></i>
        <span className="link-name">Reports</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Reports</a></li>
      </ul>
    </li>


    <li>
      <div className="icon-link">
        <a href="#">
          <i ><IoSettingsOutline /></i>
          <span className="link-name">Settings</span>
        </a>
        <i className="fas fa-angle-right arrow"></i>
      </div>

      <ul className="sub-menu">
        <li><a href="#" className="link-name">Settings</a></li>
        <li><a href="#">Access Groups</a></li>
        <li><a href="#">Departments</a></li>
        <li><a href="#">Message Categories</a></li>
      </ul>
    </li>
  </ul>
</div> */
<BrowserRouter>
  <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Dashboard
          </li>

          <li className="sidebarListItem">
            <div className="dropdown">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
              <div className="dropdown-content">
                <a href="#">Anonymous Tips</a>
                <a href="#">Emergencies</a>
              </div>
            </div>
          </li>

          <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon" />
            Users
          </li>

          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            Reports
          </li>

          <li className="sidebarListItem">
            <div className="dropdown">
              <Report className="sidebarIcon" />
              Settings
              <div className="dropdown-content">
                <a href="#">Access Groups</a>
                <a href="#">Departments</a>
                <a href="#">Message Categories</a>
              </div>
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  </div>
</BrowserRouter>


    );
};

export default Sidebar;