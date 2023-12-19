import { sidebarData } from "../globalData/sidebarLinks"
import { Link } from "react-router-dom"

const Sidebar = ({isSideBarOpen, isDarkMode}) => {
    return (
        <div className={`fixed ${isSideBarOpen ? "block": "hidden"} ${isDarkMode ? ' bg-slate-900': '' } rounded-md  z-50 shadow-xl ml-2 my-1 shadow-slate-600`}>
            <div className={` h-[95vh]  rounded-md p-2`}>
                <div className="">
                    <h3 className="text-2xl font-bold text-blue-500 ">PMS</h3>
                    <p className="mb-4">Project MS</p>
                </div>
                
                <hr />
                <ul>
                    {sidebarData.map(( link) => (
                        <Link to={link.path} className={`flex items-center gap-3 p-2 my-3 ${isDarkMode ? 'text-gray-100': 'text-gray-600 ' } text-sm rounded-md capitalize font-bold`}>{ link.icon} { link.title}</Link>
                    ))}
                </ul>
            </div>
        
        </div>
    )
}

export default Sidebar