// Home.tsx
import React from 'react';
import HomeRightbar from '../../components/HomeRightbar/HomeRightbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Home.css";


interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="mainHomeContainer">
              <Sidebar/>
              <HomeRightbar/>
    </div>
  );
};

export default Home;