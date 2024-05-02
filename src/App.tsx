import React from "react";
import HomeRightbar from "./components/HomeRightbar/HomeRightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import "./App.css"

interface AppProps {

}

export const App: React.FC<AppProps> = () => {
        return (
          <div>
              <Home/>
          </div>
        )
}


export default App


