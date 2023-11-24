import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Main from './components/main';
import { useState } from 'react';

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  
  return (
    <div className="App font-Roboto">
      <div className=' fixed top-0'>
        <Sidebar isSideBarOpen={isSideBarOpen}  />
      </div>
      <div className={`${isSideBarOpen ? 'ml-[260px]' : 'ml-[10px]'} transition-all duration-300`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Main />
      </div>
      
   
    
    </div>
  );
}

export default App;
