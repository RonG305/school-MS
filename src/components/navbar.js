import Search from "./search"
import { FiList } from 'react-icons/fi'
import { useState } from "react"
import Profile from "./profile"
import {FaSun, FaMoon} from 'react-icons/fa'





const Navbar = ({ toggleSidebar, toggleTheme, isDarkMode }) => {
    const [color, setColor] = useState("")

    

    return (
        <div className={`w-full p-3 my-2 mb-4 mr-4 text-center rounded-md shadow-xl ${isDarkMode? 'bg-slate-800' : 'bg-cyan-50 shadow-slate-300'} `}>
            <div className="flex items-center justify-between">
               
                <div className="flex gap-3 ml-5 text-sm font-bold ">
                <FiList className="cursor-pointer" size={25} onClick={toggleSidebar} />
                    <button onClick={toggleTheme} className={`px-2 py-1  ${isDarkMode ? ' bg-gray-900 border border-gray-700 text-white' : 'bg-blue-500 border-cyan-200 text-white'} rounded-md`}> {isDarkMode? <FaSun /> : <FaMoon /> }</button>
                    </div>
                <Profile />
            </div>
        
        </div>
    )
}

export default Navbar