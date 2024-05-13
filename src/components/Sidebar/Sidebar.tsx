// Sidebar.tsx
import React from 'react';
import "./Sidebar.css";
// import { faHome, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';
import {faClockRotateLeft, faHeart, faLaptopCode, faBookmark, faCartShopping, faCog } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {

}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
<div className="sidebar">
  <h3 className="adminText">Admin Portal</h3>
  <hr></hr>
  <ul className="nav-list">
    <li>
      <a href="#">
        <i className="fab fa-microsoft"></i>
        <span className="link-name">Dashboard</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Dashboard</a></li>
      </ul>
    </li>

    <li>
      <div className="icon-link">
        <a href="#">
          <i className="fab fa-codepen"></i>
          <span className="link-name">Messages</span>
        </a>
        <i className="fas fa-caret-down arrow"></i>
      </div>

      <ul className="sub-menu">
        <li><a href="#" className="link-name">Messages</a></li>
        <li><a href="#">Anonymous Tips</a></li>
        <li><a href="#">Emergencies</a></li>
      </ul>
    </li>

    <li>
      <a href="#">
        <i className="fab fa-microsoft"></i>
        <span className="link-name">Users</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Users</a></li>
      </ul>
    </li>


    <li>
      <a href="#">
        <i className="fab fa-microsoft"></i>
        <span className="link-name">Reports</span>
      </a>

      <ul className="sub-menu blank">
        <li><a href="#" className="link-name">Reports</a></li>
      </ul>
    </li>


    <li>
      <div className="icon-link">
        <a href="#">
          <i className="fab fa-blogger"></i>
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
</div>
    );
};

export default Sidebar;