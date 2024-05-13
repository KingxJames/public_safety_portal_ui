// Home.tsx
import React from 'react';
import HomeRightbar from '../../components/HomeRightbar/HomeRightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css";


interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="mainHomeContainer">
              <Sidebar/>
              {/* <Navbar/> */}
              <HomeRightbar/>
    </div>
  );
};

export default Home;