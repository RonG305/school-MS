import { FaArrowCircleLeft } from 'react-icons/fa'
import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProfileView = ({ isDarkMode }) => {
    const [employee, setEmployee] = useState({})
    const params = useParams()

    const fetchEmployee = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/employees/${params.id}`)
            const data = await response.json()
            setEmployee(data)
            console.log(data)
            
        } catch (error) {
            console.log('error occured while fetching employees')
        }
    }


    useEffect(() => {
        fetchEmployee()
    }, [params.id])


    return (
        <div className={` ${isDarkMode ? ' bg-slate-900 text-gray-300': ' shadow-lg shadow-slate-400 text-gray-700 ' } rounded-md p-3 my-3 lg:h-[78vh] w-full text-sm leading-6 relative`}>
            <div className={`${isDarkMode ? 'text-gray-300 bg-gradient-to-r from-slate-950 to-slate-700 border-gray-700': ' border-gray-300  shadow-lg shadow-slate-300 '} md:flex gap-4 border-b   `}>
                <img className=" rounded-md w-full md:w-72 mb-2 " src="/profile1.jpg" alt="profile" />
                <div className=" md:mt-10">
                    <p className=" font-bold text-xl text-blue-500">{employee.first_name} { employee.last_name}</p>
                    <p>{ employee.role}</p>
                </div>
            </div>


            <div className=" my-3">
                <p><span className=" font-bold text-blue-500">Employee ID</span> : {employee.employee_id}</p>
                <p><span className=" font-bold text-blue-500">Date of Birth</span>: { employee.date_of_birth }</p>
                <p><span className=" font-bold text-blue-500">Country</span>: {employee.country}</p>
                <p><span className=" font-bold text-blue-500">County</span>: {employee.county}</p>
                <div className=" mt-3">
                    <p className=" font-bold text-blue-500">Skill set</p>
                    <p className="bg-orange-600 text-gray-300 rounded-md px-3 py-1 w-fit">{ employee.skill_set}</p>
                </div>
                <div>
                <p className=" text-blue-500 font-bold mt-4">Description</p>
                    <p className={` border rounded-md ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}  p-3`}>
                        {employee.description}
                     </p>  
               </div>
                
            </div>

            <button className='flex items-center gap-2 px-2 bg-blue-500 rounded-md text-white absolute right-4 bottom-4'> <FaArrowCircleLeft /><Link to='/employees'>Back</Link></button>
        </div>
    )
}

export default ProfileView