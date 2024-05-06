// Navbar.tsx
import React, { Profiler } from 'react';
import "./Navbar.css";


interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="navbar">
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <img src={`${Search}`} alt="" />
          <input type="search" />
        </div>
        <div>
          <img src={`${Notification}`} alt="" />
          <div>
            <img src={`${Profile}`} alt="" />
            <p>James Faber</p>
          </div>
        </div>
    </div>
  );
};

export default Navbar;