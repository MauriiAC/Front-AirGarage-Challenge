import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchParkings } from '../redux/actions';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');


    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSearch(e){
        dispatch(searchParkings(input))
    }

    return (
        <>
            <input
                value={input}
                onChange={handleChange}
            />
            <button
                onClick={handleSearch}
            >
                Search
            </button>

        </>
    )
}

export default SearchBar
