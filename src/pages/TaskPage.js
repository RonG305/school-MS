import TaskCard from "../components/taskCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const TaskPage = ({ isDarkMode }) => {
    const [tasks, setTasks] = useState([])

    console.log('Tasks: ', tasks)

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/tasks")
            const data = await response.json()
            setTasks(data)
            console.log("Tasks data : ", data)

        } catch (error) {
            console.log('an error occured while fetching tasks', error)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            <Link className=" rounded-md border-gray-700 bg-blue-500 p-2 " to='/tasks/add'>add task</Link>
            {tasks.map((task) => (
                <TaskCard isDarkMode={isDarkMode} task={ task } />
            ))}
           
        </div>
    )
}


export default TaskPage