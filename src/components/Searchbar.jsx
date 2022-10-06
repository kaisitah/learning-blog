import { useState } from "react";

const Searchbar = (props) => {
    const [searchText, setSearchText] = useState('');
    const handleChange = (event) => {
        setSearchText(event.target.value)
    };
    return ( 
        <div>
            <input 
                className='Searchbar'
                type='search'
                onChange={handleChange}
                value={searchText}
                placeholder='Type here to search'
            />
            <p>No results were found for {searchText}</p>    
        </div>
    );
} 

export default Searchbar;