import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import MessageForm from "./messageForm"
import MessageList from "./messageList"

const ProjectDetail = ({isDarkMode}) => {
    const [project, setProject] = useState({})
    const params = useParams()

    const fetchProject = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/projects/${params.id}`)
            const data = await response.json()
            setProject(data)
            console.log(data)
            

        } catch (error) {
            console.error('An error occured while fetching an project', error)
        }
    }


    const styles = {
        container: " dark:text-gray-500",
        container1 : `${isDarkMode ? ' bg-slate-900 text-gray-300': ' shadow-lg shadow-slate-400 ' } rounded-md p-3 my-3 lg:h-[78vh] overflow-y-auto w-full relative`,
        project_details_title: `text-center font-bold my-3 text-2xl ${isDarkMode? 'text-white': 'text-black'} `,
        card_container: "lg:flex gap-3 ",
        card_sub_container: `lg:w-2/3 border ${isDarkMode ? 'border-gray-700 from-slate-900 to-slate-800 text-gray-300' : 'bg-gradient-to-b from-cyan-100 to-white border-cyan-200 '}  rounded-md p-4 relative `,
        card_status_complete: " bg-green-500 text-white font-bold rounded-md p-1 w-fit absolute right-4 text-xs",
        card_status_pending: " bg-orange-700 text-white font-bold rounded-md p-1 w-fit absolute right-4 text-xs",
        card_status_progess: " bg-orange-500 text-white font-bold rounded-md p-1 w-fit absolute right-4 text-xs",
        priority_level: " bg-red-500 text-white font-bold rounded-md px-3",
        assignees: `lg:w-1/3 border rounded-md p-4 ${isDarkMode ? 'border-gray-700 from-slate-900 to-slate-800 text-gray-300' : 'bg-gradient-to-b from-cyan-100 to-white border-cyan-200'}  leading-6 text-xs `,
        role_style: "border border-blue-500 rounded-xl px-2 font-bold text-blue-500",
        assigenee_container: " flex  gap-3 my-3",
        project_timeline : "text-sm my-3"
    }

    useEffect(() => {
        fetchProject()
    }, [params.id])
    
    return (
        <div className={styles.container1}>
            <h3 className={styles.project_details_title}>Project Details</h3>
            <div className={styles.card_container}>
                <div className={styles.card_sub_container}>
                    <Link to={project.clone_url} className={project.status === 'complete'? styles.card_status_complete : styles.card_status_pending}>clone url</Link>
                    <p className="text-xl font-bold text-blue-500 ">{ project.name}</p>
                    <div className="my-4">
                        <h3 className="font-bold ">Project description</h3>
                        <p className="text-sm leading-6 ">{ project.description}</p>
                        
                    </div>

                    <hr />

                    <div className="mb-4 leading-6 ">
                        <h3 className="my-4 font-bold ">Project Time-line</h3>
                        <p className={styles.project_timeline}>Date posted: { project.date_posted}</p>
                        <p className={styles.project_timeline}>Due on : { project.deadline}</p>
                        <p className={styles.project_timeline}>Duration: 4 months</p>
                        <p className={styles.project_timeline}>priority level: <span className={styles.priority_level}>{ project.priority_level}</span></p>
                        
                    </div>

                    <hr />

                    
                </div>

                <div className={styles.assignees}>
                    <h3 className="mb-4 ">Employees assigned the tasks</h3>
                    <hr />
                    <div className={styles.assigenee_container}>
                        <p>Ronald Mutia</p>
                        <p className={styles.role_style}>Software engineer</p>
                    </div>

                    <div className={styles.assigenee_container}>
                        <p>Susan Kamau</p>
                        <p className={styles.role_style}>Designer</p>
                    </div>

                    <div className={styles.assigenee_container}>
                        <p>Stephen Waweru</p>
                        <p className={styles.role_style}>Data analyst</p>
                    </div>

                    <div className={styles.assigenee_container}>
                        <p>Jane Sansori</p>
                        <p className={styles.role_style}>Software developer</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            {/* Project messages and Comments */}
            <h3 className=" font-bold text-blue-500 my-3">Start messaging and commenting on project</h3>

            <MessageList isDarkMode={isDarkMode} projectId={params.id} />

            <div className=" w-full text-center pt-2  h-14 rounded-md  bg-slate-200  bottom-1 fixed ">
                {project.id && <MessageForm project={project.name}  />}
                
            </div>
            
            
        </div>
    )
}


export default ProjectDetail