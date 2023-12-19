import {FaDollarSign} from 'react-icons/fa'

const Revenue = () => {
    const containerStyle = " w-full md:w-1/5 h-40 bg-gradient-to-r from-orange-500 to-orange-300  rounded-md bg-orange-500 mb-2 p-3 flex items-start justify-between"
    const headerStyle = " font-bold text-white text-lg"
    const countStyle = " text-2xl font-bold text-white"

    
    return (
        <div className={containerStyle}>
            <div>
                <h3 className={headerStyle}>Revenue Info</h3>
                <h3 className={countStyle}>$180,000,000 </h3>
            </div>
           
            <FaDollarSign size={40} className='text-white' />
        </div>
    )
}


export default Revenue