import {FaSearch} from 'react-icons/fa'


const Search = () => {
    return (
        <div className='w-full'>
            
            <input
                
                type="search"
                className='rounded-md py-2 px-2 md:w-2/5 outline-none'
                placeholder='search ...'
            />
            {/* <FaSearch size={20} /> */}
        </div>
    )
}


export default Search