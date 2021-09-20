import React from 'react'
import Country from './Country'

const Countries = ({ data }) => {
    
    const formattedCountry = data.map((country) => {
        return (<li key={country.name} className='w-4/12 px-5 mb-5'><Country country={country}/></li>)
    })
    return (
        <ul className='bg-gray-200 flex flex-wrap px-5 py-6'>
            {formattedCountry}
        </ul>
    )
}

export default Countries