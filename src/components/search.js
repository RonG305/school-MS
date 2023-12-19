import {FaSearch} from 'react-icons/fa'


const Search = ({ searchTerm, handleSearch, isDarkMode }) => {
    
    const handleInputChange = (event) => {
        const term = event.target.value;
        handleSearch(term)

        console.log(term)
    }
    return (
        <div className='w-full'>
            
            <input
                
                type="search"
                className={`w-full px-2 py-2 ${isDarkMode? 'bg-slate-800 border-gray-700 text-gray-400': ''}  text-gray-500 border border-gray-300 rounded-md outline-none md:w-2/5`}
                placeholder='search ...'
                value={searchTerm}
                onChange={handleInputChange}
                
            />
            {/* <FaSearch size={20} /> */}
        </div>
    )
}


export default Search