import {LuProjector} from 'react-icons/lu'

const ProjectsInfo = () => {
    const containerStyle = " w-full md:w-1/5 h-40 bg-gradient-to-r from-blue-500 to-blue-200  rounded-md  mb-2 p-3 flex items-start justify-between"
    const headerStyle = " font-bold text-white text-lg"
    const countStyle = " text-2xl font-bold text-white"

    
    return (
        <div className={containerStyle}>
            <div>
                <h3 className={headerStyle}>projects Info</h3>
                <h3 className={countStyle}>38 </h3>
            </div>
           
            <LuProjector size={40} className='text-white' />
        </div>
    )
}


export default ProjectsInfo