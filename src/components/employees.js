import { useState, useEffect } from "react"
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import {Link} from 'react-router-dom'

const Employee = ({ isDarkMode }) => {
    
    const [employees, setEmployees] = useState([])
    const [show, setShow] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = employees.slice(startIndex, endIndex)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }
    

    const handleNext = () => {
        handlePageChange(currentPage + 1)
    }

    const handlePrev = () => {
        handlePageChange(currentPage - 1)
    }

    const handleShow = (index) => {
        setShow(show === index? null : index)
    }

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/employees')
            const data = await response.json()
            setEmployees(data)
            console.log(data)
            
        } catch (error) {
            console.log('error occured while fetching employees')
        }
    }


    useEffect(() => {
      fetchEmployees()
    }, [])


    const deleteMember = async(id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/employees/${id}/`, {
                method: 'DELETE',
            })

            if (response.ok) {
                console.log('deleted succesifully')
                window.location.reload()
            } else {
                console.log('Failed to delete...')
            }

        } catch (error) {
            console.log('Failed to delete team member', error)
        }
    }

    
    
    const rowStyles = "px-4 py-4 "
    const prevBtn = " bg-blue-500 rounded-md px-2 text-white py-1 mr-2 flex items-center gap-1 "
    const nextBtn = " bg-blue-500 rounded-md px-2 text-white py-1 ml-2 flex items-center gap-1"
    const optionStyle = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"


    return (
        <div className={` ${isDarkMode ? ' bg-slate-900': ' shadow-lg shadow-slate-400 ' } rounded-md p-3 my-3 lg:h-[78vh] w-full`}>
            <h3 className=" text-blue-500">Team members</h3>
            <div className="overflow-x-auto">
            <table className={` ${isDarkMode ? 'border-gray-700 text-gray-300': ' border-gray-300 text-gray-500 '} w-full mt-5 text-sm text-left border rounded-md`}>
                <thead>
                    <tr className={` ${isDarkMode ? 'border-gray-700 text-gray-300': ' border-gray-300 text-gray-500 '} border m-2`}>
                        <th className={rowStyles}>#EmployeeID</th>
                        <th className={rowStyles}>Full Name</th>
                        <th className={rowStyles}>Email address</th>
                        <th className={rowStyles}>Role</th>
                  
                        <th className={rowStyles}>date joined</th>
                        <th className={rowStyles}>active</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsToShow.map((employee, index) => (
                          <tr key={index} className={` ${isDarkMode ? 'border-gray-700 text-gray-300' : ' border-gray-300 text-gray-500 '} border`}>
                        
                          <td className={rowStyles + " flex gap-2 items-center"}><img className=" w-5 h-5 rounded-md" src={employee.profile} alt="pf"/> {employee.employee_id}</td>
                          <td className={rowStyles}>{employee.first_name} {employee.last_name}</td>
                            <td className={rowStyles}>{ employee.email}</td>
                          <td className={rowStyles}>{ employee.role}</td>
                          
                          <td className={rowStyles}>{employee.date_joined}</td>
                          <td><span className=" border border-green-500 text-green-500 rounded-lg px-4">active</span> </td>
                          
                          <td className={`${rowStyles} relative`}>
                          <FaEllipsisVertical size={20}
                            className=' text-sm cursor-pointer'
                            onClick={() => handleShow(index)}
                             />
                                {show === index && (
                                <div className={`absolute top-8 z-50 right-2  mt-2 w-40 rounded-md shadow-lg bg-white   focus:outline-none`}>
                                   <Link to={`/employee/profile/${employee.id}`}><p className={optionStyle}>view</p></Link> 
                                    <p className={optionStyle}>update</p>
                                    <p onClick={() => deleteMember(employee.id)} className={optionStyle}>delete</p>
                                </div>
                             )}
                            </td>      
                        
                                    
                 </tr>
                    ))}
                  

                    
                </tbody>
            </table>
            </div>

            <div className=" text-center flex items-center justify-center my-3 ">
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrev}
                    className={prevBtn}><FaArrowCircleLeft />prev</button>
                <p> page {currentPage} of {Math.ceil(employees.length / itemsPerPage)} </p>
                <button
                    disabled={currentPage === Math.ceil(employees.length / itemsPerPage)}
                    onClick={handleNext}
                    className={nextBtn}>Next <FaArrowCircleRight /></button>
            </div>
        </div>
    )
}


export default Employee