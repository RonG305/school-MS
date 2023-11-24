import { sidebarData } from "../globalData/sidebarLinks"

const Sidebar = ({isSideBarOpen}) => {
    return (
        <div className={`fixed ${isSideBarOpen ? "block": "hidden"} text-white`}>
            <div className={`$ w-[250px]  h-[100vh] bg-[#7071E8] rounded-md p-2`}>
                <h2 className="my-3 font-extrabold">SCHOOL MS</h2>
                <hr />
                <ul>
                    {sidebarData.map(( link) => (
                        <li className=" my-3  rounded-md p-2">{ link.title}</li>
                    ))}
                </ul>
            </div>
        
        </div>
    )
}

export default Sidebar