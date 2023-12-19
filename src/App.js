import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import { useState } from 'react';
import Login from './components/login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <div className=' overflow-x-hidden font-Poppins'>
      <Main />
     
    </div>
  );
}

export default App;
