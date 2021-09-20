import React from 'react'
import {FcBarChart} from "react-icons/fc";

const Header = ({ data, numberOfCountry, searchTerm }) => {
    return (
        <header className='text-center pt-10 pb-5 bg-gray-100' id='home'>
            <h1 className='text-7xl font-bold text-yellow-500'>World Countries Data</h1>
            <h3 className='text-3xl font-bold text-gray-600 mt-6'>Currently, we have {data.length} countries</h3>
            {searchTerm ? <h3 className='text-3xl font-medium mt-3 italic text-yellow-600'>{numberOfCountry} satisfied the search criteria</h3> : ''}
            <div className='text-center mt-5'>
                <a href='#graph' className='text-5xl text-center inline-block'><FcBarChart/></a>
            </div>
        </header>
    )
}

export default Header