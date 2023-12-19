import { useState, useEffect } from "react"
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { Link } from "react-router-dom"

const Tasks = ({ isDarkMode }) => {
    
    const [tasks, setTasks] = useState([])
    const [show, setShow] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = tasks.slice(startIndex, endIndex)

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

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/tasks')
            const data = await response.json()
            setTasks(data)
            console.log(data)
            
        } catch (error) {
            console.log('error occured while fetching employees')
        }
    }

    const deleteTask = async(id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/tasks/${id}/`, {
                method: 'DELETE',
            })

            if (response.ok) {
                console.log('deleted succesifully')
                window.location.reload()
            } else {
                console.log('Failed to delete...')
            }

        } catch (error) {
            console.log('Failed to delete task', error)
        }
    }


    useEffect(() => {
      fetchTasks()
    }, [])
    
    
    const rowStyles = "px-4 py-4 "
    const prevBtn = " bg-blue-500 rounded-md px-2 text-white py-1 mr-2 flex items-center gap-1 "
    const nextBtn = " bg-blue-500 rounded-md px-2 text-white py-1 ml-2 flex items-center gap-1"
    const optionStyle = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"



    return (
        <div className={` ${isDarkMode ? ' bg-slate-900' : ' shadow-lg shadow-slate-400 '} rounded-md p-3 my-3 lg:h-[78vh] w-full`}>
            <div className=" gap-3 flex flex-col w-fit">
                <h3 className=" text-blue-500">Tasks List</h3>
                <Link className=" bg-blue-500 rounded-md px-3 text-white py-2 " to='/tasks/add'>add tasks</Link>
            </div>
            <div className="overflow-x-auto">
            <table className={` ${isDarkMode ? 'border-gray-700 text-gray-300': ' border-gray-300 text-gray-500 '} w-full mt-5 text-sm text-left border rounded-md`}>
                <thead>
                    <tr className={` ${isDarkMode ? 'border-gray-700 text-gray-300': ' border-gray-300 text-gray-500 '} border m-2`}>
                        <th className={rowStyles}>Task Name</th>
                        <th className={rowStyles}>start Date</th>
                        <th className={rowStyles}>End Date</th>
                        <th className={rowStyles}>Team leader</th>
                        <th className={rowStyles}>status</th>
                        <th className={rowStyles}>Actions</th>
                  
                      
                    </tr>
                </thead>
                <tbody>
                    {itemsToShow.map((task, index) => (
                          <tr key={index} className={` ${isDarkMode ? 'border-gray-700 text-gray-300' : ' border-gray-300 text-gray-500 '} border`}>
                        
                         
                          <td className={rowStyles}>{task.task_name}</td>
                            <td className={rowStyles}>{ task.start_date}</td>
                          <td className={rowStyles}>{ task.end_date}</td>
                          
                          <td className={rowStyles}>{task.team_leader}</td>
                            <td><span className={` border ${task.status === 'complete' ? 'border-green-500 text-green-500': 'border-red-500 text-red-500' }  rounded-lg px-2`}>{task.status}</span> </td>
                          <td className={`${rowStyles} relative`}>
                          <FaEllipsisVertical size={20}
                            className=' text-sm cursor-pointer'
                            onClick={() => handleShow(index)}
                             />
                                {show === index && (
                                <div className={`absolute top-8 z-50 right-2  mt-2 w-40 rounded-md shadow-lg bg-white   focus:outline-none`}>
                                    <p className={optionStyle}>view</p>
                                    <p className={optionStyle}>update</p>
                                    <p onClick={() => deleteTask(task.id)} className={optionStyle}>delete</p>
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
                <p> page {currentPage} of {Math.ceil(tasks.length / itemsPerPage)} </p>
                <button
                    disabled={currentPage === Math.ceil(tasks.length / itemsPerPage)}
                    onClick={handleNext}
                    className={nextBtn}>Next <FaArrowCircleRight /></button>
            </div>
        </div>
    )
}


export default Tasks