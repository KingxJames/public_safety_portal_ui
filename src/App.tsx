import React from "react";
import HomeRightbar from "./components/HomeRightbar/HomeRightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Dashboard/Dashboard";
import "./App.css"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";


interface AppProps {

}

export const App: React.FC<AppProps> = () => {
        return (
          <div>
            <Topbar />
            <div className="container">
            <Sidebar/>
              <Home/>
            </div>  
          </div>

        )
}


export default App


