import React from 'react'

const Search = ({ onChange }) => {
    return (
        <input 
        type='text' 
        name='search' 
        placeholder='Search countries by name, city and lang' 
        onChange={onChange}
        className='pl-10 py-4 rounded-full border-4 border-pink-100 bg-pink-50 text-3xl font-light w-5/12'
        />
    )
}

export default Search