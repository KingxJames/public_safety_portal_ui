// Navbar.tsx
import React from 'react';
import "./Navbar.css";
import Search from "../../components/Icons/Search.png";
import Profile from "../../components/Icons/boy.jpg"
import Bell from "../../components/Icons/bell.png"

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="nav">
        <div className="searchItemsContainer">
          {/* <img src={`${Search}`} className="searchIcon" alt="" /> */}
          <input className="search" type="search" placeholder="Search..." />
        </div>
        <div className="profileItemsContainer">
          <img src={`${Bell}`} className="bellIcon" alt="" />
          <div className="profileItems">
            <img src={`${Profile}`} className="profileIcon" alt="" />
            {/* <p>James Faber</p> */}
          </div>
        </div>

    </div>

  
  );
};

export default Navbar;