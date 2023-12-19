import { FaLine , FaEye, FaEdit} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEllipsisVertical  } from 'react-icons/fa6'
import {RiDeleteBin6Fill} from 'react-icons/ri'

const Card = ({ project, isDarkMode }) => {
    
    const [dueDays, setDueDays] = useState(null)
    const [show, setShow] = useState(false)


    const handleShow = () => {
        setShow(!show)
    }

    const calculateDueDate = () => {
        const today = new Date()
        const deadlineDate = new Date(project.deadline)

        const differenceInMs = deadlineDate - today
        const daysDifference = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))

        setDueDays(daysDifference)
    }

    const deleteProject = async (projectId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/projects/${projectId}`, {
                method: 'DELETE',

            })

            if (response.ok) {
                console.log('deleted succesifully')
                window.location.reload()
                
            } else {
                console.log('server error while deleting the project')
            }
        } catch (error) {
            console.log('error while deleting the project', error)
        }
       
    }

    useEffect(() => {
        calculateDueDate()
     
    }, [])





    
    const deadlineStyles = 'text-sm absolute bottom-2 right-2 bg-blue-500 rounded-sm text-bold px-2 text-white'
    
    const styles = {
        btnStyles: " bg-orange-700 rounded-md px-2 text-white",
        visibilityStyle: "bg-blue-700 rounded-md px-2 text-white",
        container: `w-full lg:w-80 ${isDarkMode ? 'border-gray-700 text-gray-300': ' border-gray-300 text-gray-500 '}  h-48 shadow-xl transition-all duration-300  bg-gradient-to-b from-grey-100 to-white font-Poppins rounded-md p-2 border  relative`,
        project_name: ' text-sm font-bold mb-4 text-blue-500',
        date_posted: ' text-sm my-1',
        status: ` text-sm my-2 border border-gray-300 rounded-md px-2 ${project.status === 'completed' ? 'bg-green-400 text-black' : 'bg-orange-500 text-white'}`,
        priority: `${project.priority_level === 'high' ? 'text-red-500': 'text-blue-500'} font-bold`
    }
    return (
      

            
            <div  className={styles.container}>
            <div >
                <h3 className={styles.project_name}>{ project.name}</h3>
                <h3 className={styles.date_posted}>Date Posted: { project.date_posted}</h3>
                <h3 className={styles.date_posted}>Priority level: <span className={styles.priority} >{project.priority_level}</span></h3>
                <h3>status: <span className={styles.status}>{ project.status}</span></h3>
                
                <p className={deadlineStyles}>Deadline: {project.deadline}</p>
                {dueDays !== null && (
                <p className={`text-xs absolute bottom-3 right-2 ${dueDays <= 0 ? 'bg-red-500' : 'bg-blue-500' }  rounded-sm text-bold px-2 text-white my-5`}>Due: {dueDays} {dueDays === 1  ? 'day' : 'days'}</p>
                )}
                
            </div>

            <div>
                <FaEllipsisVertical size={20}
                    className='absolute text-sm cursor-pointer right-2 top-2'
                    onClick={handleShow}
                />
                {show && 
                    <div className='absolute p-2 mt-2 text-sm text-gray-500 transition-all duration-300 bg-white border rounded-sm right-2 top-6 border-cyan-100 '>
                    <Link to={`/project/${project.id}`}><FaEye size={20} className='cursor-pointer ' /></Link>
                    <Link to={`/edit/${project.id}`}> <FaEdit className='my-2 cursor-pointer '  size={20} /></Link>
                   
                    <RiDeleteBin6Fill className='text-red-500 cursor-pointer ' onClick={() => deleteProject(project.id)} size={20} />
                    
                </div>
                }
                
                
            </div>
           
          
        </div>
 
        
    )
}

export default Card