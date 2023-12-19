import {FaDollarSign} from 'react-icons/fa'

const Expenditure = () => {
    const containerStyle = " w-full md:w-1/5 h-40 bg-gradient-to-r from-blue-500 to-blue-300  rounded-md  mb-2 p-3 flex items-start justify-between"
    const headerStyle = " font-bold text-white text-lg"
    const countStyle = " text-2xl font-bold text-white"

    
    return (
        <div className={containerStyle}>
            <div>
                <h3 className={headerStyle}> Total Expenditure </h3>
                <h3 className={countStyle}>$28,300 </h3>
            </div>
           
            <FaDollarSign size={40} className='text-white' />
        </div>
    )
}


export default Expenditure