import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const EditProject = ({isDarkMode}) => {

    const navigate = useNavigate()
    const params = useParams()

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        status: "",
        priority_level: "",
        date_posted: "",
        deadline: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const fetchProject = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/projects/${params.id}`)
            const data = await response.json()
            console.log(data)
            setFormData(data)

        } catch (error) {
            console.log('Error while fetching project data', error)
        }
    }


    useEffect(() => {
      fetchProject()
    }, [params.id])
    


    const handleSubmit = async (event) => {

        event.preventDefault()

        try {
            const response = await fetch(`http://localhost:8000/api/projects/${params.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }, 

                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('Data submitted succesifully')
                return navigate('../projects', {replace: true})
            } else {
                console.log('There was a server error while submitting the data ')
            }
        } catch (error) {
            console.log('An error occurred on the form while submitting the data', error)
        }
    }

    const inputStyle = `border ${isDarkMode ? 'border-gray-700 bg-slate-700 text-gray-300': ''} border-gray-200 rounded-md px-2 py-1 outline-none text-sm text-gray-500`
    return (
        <div>
            <h3 className="my-4 font-bold text-center text-blue-500">Edit project</h3>
            <form onSubmit={handleSubmit} className="flex items-center justify-center  md:h-3/4">
                <div className={`flex flex-col w-full gap-4 p-4 ${isDarkMode? 'bg-slate-800 shadow-md border-gray-700 shadow-slate-700': ''} border border-gray-200 rounded-md shadow-xl  lg:w-1/3 shadow-slate-300`}>
                <input
                    type='text'
                    placeholder="project name"
                    className= {inputStyle}
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                />

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

                <input
                    type='text'
                    placeholder="status"
                    className= {inputStyle}
                    value={formData.status}
                    name="status"
                    onChange={handleChange}
                />

                <input
                    type='text'
                    placeholder="priority level"
                    className= {inputStyle}
                    value={formData.priority_level}
                    name="priority_level"
                    onChange={handleChange}
                />

                <input
                    type='date'
                    placeholder="date posted"
                    className= {inputStyle}
                    value={formData.date_posted}
                    name="date_posted"
                    onChange={handleChange}
                />

                <input
                    type='date'
                    placeholder="deadline"
                    className= {inputStyle}
                    value={formData.deadline}
                    name="deadline"
                    onChange={handleChange}
                />
                    <div className="flex justify-between">
                        <button  className="px-3 py-1 text-white bg-gray-400 rounded-md  w-fit"><Link to='/projects'>cancel</Link></button>
                        <button className="px-3 py-1 text-white bg-blue-500 rounded-md  w-fit">submit</button>
                 
                    </div>
                    
                </div>
               
                
            </form>
        </div>
    )
}


export default EditProject