import Search from "./search"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FaEye, FaEdit} from 'react-icons/fa'
import { FaEllipsisVertical  } from 'react-icons/fa6'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const TaskCard = ({ isDarkMode, task }) => {
    const [isComplete, setIsComplete] = useState(true)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    


    const containerStyles = `p-3 rounded-lg border ${isDarkMode ? 'border-gray-700 text-gray-300': 'border-gray-300 text-gray-500'} w-full text-sm  leading-6 md:flex items-center justify-between relative mb-3 `

    const status = ` text-sm my-2 border border-gray-300 rounded-md px-2 bg-orange-500 text-white`

    const handleShow = () => {
        setShow(!show)
    }


    const deleteTask = async (id) => {
        try {

            const response = await fetch(`http://localhost:8000/api/tasks/${id}/`, {
                method: 'DELETE'
            })

            if (response.ok) {
                console.log('Succesifully deleted')
            } else {
                console.log('Failed to delete task')
            }

        } catch (error) {
            console.log('An error occured when fetching task', error)
        }
    }


    const handleComplete = async() => {
        try {
            const response = await fetch(`http://localhost:8000/api/tasks/${task.id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }, 

                body : JSON.stringify({status: 'complete'})
            })

            if (response.ok) {
                console.log('status updated succesifully')
                
            }
            else {
                console.log('error updating status')
            }


        } catch (error) {
            console.log('An error occured while updating status', error)
        }
        setIsComplete(false)
    }
    
    return (
        <div className="  md:grid grid-cols-2 gap-4">
            {/* <div className=" my-3 text-center">
                <Search />
            </div> */}


            <div className=" relative" >
                
                {isComplete && task.status !== 'complete' && (
                    <div className={containerStyles}>
                      <div>
                          <p><span className=" font-bold">Task Id</span> : {task.id }</p>
                          <p className=" text-blue-500 font-bold">{ task.task_name}</p>
                          <p><span className=" font-bold">team leader</span>: { task.team_leader}</p>
      
                      </div>
                      
                      <div  className=' leading-6'>
                          <button className={status}>{task.status }</button>
                          <p>Start date: {task.start_date} | end date: { task.end_date}</p> 
                          <button onClick={handleComplete} className=" px-2 rounded-md bg-green-500 border-gray-500">mark complete</button>
                        </div>
                        
                    <div>

                        <FaEllipsisVertical size={20}
                        className='absolute text-sm cursor-pointer right-2 top-2'
                        onClick={handleShow}
                        />
                        {show && 
                        <div className='absolute p-2 mt-2 text-sm text-gray-500 transition-all duration-300 bg-white border rounded-sm right-2 top-6 border-cyan-100 '>
                        <Link to={`/tasks/${task.id}`}><FaEye size={20} className='cursor-pointer ' /></Link>
                        <Link to={`/task/edit/${task.id}`}> <FaEdit className='my-2 cursor-pointer '  size={20} /></Link>

                        <RiDeleteBin6Fill className='text-red-500 cursor-pointer ' onClick={() => deleteTask(task.id)}  size={20} />

                    </div>
                        }

                        </div>  
                   
      
                    </div>
                    
                    
                )}
               
                
                
                <div>
                    
               
                
            </div>
          

            
            </div>


          
          
        </div>
    )
}


export default TaskCard