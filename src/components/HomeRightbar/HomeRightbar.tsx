// HomeRightbar.tsx
import React from 'react';
import "./HomeRightbar.css";
import Navbar from '../Navbar/Navbar';

interface HomeRightbarProps {

}

export const HomeRightbar: React.FC<HomeRightbarProps> = () => {
  return (
    <div className="mainHomeRightbar">
      <Navbar/>  
    </div>
  );
};

export default HomeRightbar;