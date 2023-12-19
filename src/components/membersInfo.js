import {FaUser} from 'react-icons/fa'

const MembersInfo = () => {
    return (
        <div className=" w-full md:w-1/5 h-40 bg-gradient-to-r from-orange-500 to-orange-200  rounded-md bg-orange-500 mb-2 p-3 flex items-start justify-between">
            <div>
                <h3 className=" font-bold text-white text-lg">Members Info</h3>
                <h3 className=" text-2xl font-bold text-white">12 </h3>
            </div>
           
            <FaUser size={40} className='text-white' />
        </div>
    )
}


export default MembersInfo