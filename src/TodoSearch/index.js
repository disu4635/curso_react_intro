import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function TodoSearch(props){
    const {
        searchValue,
        setSearchValue
      } = useContext(TodoContext)

    return(
        <input  
            className='TodoSearch'  
            id="search" 
            placeholder="Search..."
            value = {searchValue}
            onChange={(event) => (setSearchValue(event.target.value))}
        />
    );
}

export { TodoSearch }