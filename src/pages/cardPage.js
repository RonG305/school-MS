import Card from "../components/card"
import { useState , useEffect} from "react"
import { Link } from "react-router-dom"
import SkeletonCard from "../components/cardSkeleton"




const CardPage = ({searchTerm, isDarkMode}) => {

    const [projectList, setProjectList] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [projectCount, setProjectCount] = useState(0)
 
  
    
    console.log("project list:" , projectList)
 


    const getProjects = async () => {

        try {
            
            const response = await fetch('http://localhost:8000/api/projects')
            const data = await response.json()
            setProjectList(data.projects)
            setProjectCount(data.projects_count)
            console.log(data)
        } catch (error) {
            console.log('An error occured while fetching projects')
        }
    
    }

    useEffect(() => {
        setTimeout(() => {
            getProjects()
            setIsLoading(false)
        }, 3000);
        
    }, [])


    return (
        <div className="px-2">
            <h3 className={`my-4 text-xl ${isDarkMode ? 'text-white': ''} font-bold text-center`}>Manage your projects </h3>
            <button className="px-3 py-1 mb-3 font-bold text-white bg-blue-500 rounded-md "><Link  to='/add-project'>add project</Link></button>
            <div className="flex flex-wrap justify-start gap-3 md:items-center">
                {isloading ? (
                    Array.from({ length: 10 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    )
                    )) : (
                        projectList.map((project) => (

                            <Card project={project} isDarkMode={isDarkMode} />
                            // <SkeletonCard />
                            
                        
                        ))
                )}
                
             </div>
         
        </div>
    )
}


export default CardPage