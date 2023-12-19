import React from 'react';


import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar';
import { useState } from 'react';
import Card from '../components/card';
import CardPage from '../pages/cardPage';
import EmployeePage from '../pages/EmployeePage';
import ProjectDetail from '../components/projectDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TaskPage from '../pages/TaskPage';
import Search from '../components/search';
import ProjectForm from '../components/projectForm';
import EditProject from '../components/editProject';
import TaskForm from '../components/taskForm';
import EditTask from '../components/taskEdit';
import ProfileView from '../components/profileView';
import Tasks from '../components/tasks';
import Login from '../components/login';
import Dashboard from './dashboard';


const Main = () => {


  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [navigation, setNavigation] = useState('')
    

  
    


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }


  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase())
  }
    

    
    
    return (
        <div className={`h-screen mb-4 mr-4 overflow-x-hidden App font-Poppins ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'} transition-all duration-300 `}>
     

      <Router>
      <Routes>
      <Route path='/' element ={<Login />} />
      </Routes>  
      

      <div className='fixed top-0 '>
        <Sidebar isSideBarOpen={isSideBarOpen} isDarkMode={isDarkMode} />
      </div>
      
        

    
        <div className={`${isSideBarOpen ? 'ml-[170px]' : 'ml-[20px]'} transition-all duration-300 mx-4 `}>
          
          <Navbar toggleSidebar={toggleSidebar} toggleTheme={toggleTheme}  isDarkMode={isDarkMode} />
          <div className='text-center'>
            <Search searchTerm={searchTerm} handleSearch={handleSearch} isDarkMode={ isDarkMode} />
          </div>
        
        <Routes>
          <Route path='/dashboard' element={<Dashboard isDarkMode={isDarkMode} />} />
          <Route path='/projects' element={<CardPage isDarkMode={isDarkMode} />} />
          <Route path='/project/:id' element={<ProjectDetail isDarkMode={isDarkMode} />} />
          <Route path='/edit/:id' element={<EditProject isDarkMode={ isDarkMode} />} />
          <Route path='add-project' element={<ProjectForm isDarkMode={isDarkMode} />} />
          {/* <Route path='/' element={<EmployeePage />} /> */}
          <Route path='/employees' element={<EmployeePage isDarkMode={isDarkMode} />}  />
          <Route path='/employee/profile/:id' element={<ProfileView isDarkMode={isDarkMode} />} />
          <Route path='/tasks' element={<Tasks isDarkMode={isDarkMode} />} />
          <Route path='/tasks/add' element={<TaskForm isDarkMode={isDarkMode} />} />
          <Route path='/task/edit/:id' element={<EditTask isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
      
   
      </Router>
    </div>
    )
}

export default Main