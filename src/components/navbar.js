import Search from "./search"
import { FiList } from 'react-icons/fi'



const Navbar = ({toggleSidebar}) => {
    return (
        <div className="bg-slate-200 p-3 text-center  rounded-md w-full my-2 mr-4 mb-4">
            <div className="flex items-center ">
                <FiList className="cursor-pointer" size={20} onClick={toggleSidebar} />
                <Search />
            </div>
        
        </div>
    )
}

export default Navbar