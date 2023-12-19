import { useState , useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"


const TaskForm = ({ isDarkMode }) => {
    const navigate = useNavigate()
    const [employees, setEmployees] = useState([])
    const [formData, setFormData] = useState({
        task_name: '',
        start_date: '',
        end_date: '',
        status: 'incomplete',
        team_leader: '',
        description: '',
        assignned_mebers: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
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
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/tasks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 

                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('Data submitted succesifully')
                return navigate('../tasks', {replace: true})
            } else {
                console.log('There was a server error while submitting the data ')
            }
        } catch (error) {
            console.log('An error occurred on the form while submitting the data', error)
        }

    }
    const inputStyle = `border ${isDarkMode ? 'border-gray-700 bg-slate-700 text-gray-200' : ''} border-gray-200 rounded-md px-2 py-1 outline-none text-sm text-gray-500`
    
    const style1 = 'text-gray-300 mt-2'
    const style2 = 'text-gray-700 mt-2'
    return (
        <div>
              <form onSubmit={handleSubmit} className="flex items-center justify-center md:h-3/4 mt-4">
                <div className={`flex flex-col w-full  p-4 ${isDarkMode? 'bg-slate-800 shadow-md border-gray-700 shadow-slate-700': ''} border border-gray-200 rounded-md shadow-xl  lg:w-1/3 shadow-slate-300`}>
                    

                    
                <p className={`${isDarkMode ? style1 : style2}`}> Task Name</p>
                <input
                    type='text'
                    placeholder="task name"
                    className= {inputStyle}
                    value={formData.task_name}
                    name="task_name"
                    onChange={handleChange}
                />
                <p className={`${isDarkMode ? style1 : style2}`}>provide description</p>
                <textarea
                    type='textarea'
                    rows={10}
                    cols={20}
                    placeholder="Description"
                    className= {inputStyle}
                    value={formData.description}
                    name='description'
                    onChange={handleChange}
                />
                <p className={`${isDarkMode ? style1 : style2}`}> Enter start date</p>
                <input
                    type='date'
                    placeholder="start date"
                    className= {inputStyle}
                    value={formData.start_date}
                    name="start_date"
                    onChange={handleChange}
                />
                <p className={`${isDarkMode ? style1 : style2}`}>Enter end date</p>
                <input
                    type='date'
                    placeholder="end date"
                    className= {inputStyle}
                    value={formData.end_date}
                    name="end_date"
                    onChange={handleChange}
                />
                <p className={`${isDarkMode ? style1 : style2}`}>Enter Team leader</p>
                <input
                    type='text'
                    placeholder="team leader"
                    className= {inputStyle}
                    value={formData.team_leader}
                    name="team_leader"
                    onChange={handleChange}
                />
                
                <input
                    type='text'
                    placeholder=" status "
                    className= {inputStyle}
                    value={formData.status}
                    name="status"
                    onChange={handleChange}
                    hidden={true}
                    />   
                    <p>Assign members</p>
                    <select
                        className={inputStyle}
                        name="assigned_mebers"
                        value={formData.assignned_mebers}
                        onChange={handleChange}
                        multiple
                    >
                        <option disabled>Assign members</option>
                        {employees.map((member) => (
                            <option key={member.id} value={member.id}>
                                {member.first_name}
                            </option>
                        ))}
                    </select>
                    
                  

               
                    <div className="flex justify-between mt-4">
                        <button  className="px-3 py-1 text-white bg-gray-400 rounded-md w-fit"><Link to='/tasks'>cancel</Link></button>
                        <button className="px-3 py-1 text-white bg-blue-500 rounded-md w-fit">submit</button>
                 
                    </div>
                    
                </div>
               
                
            </form>
        </div>
    )
}


export default TaskForm