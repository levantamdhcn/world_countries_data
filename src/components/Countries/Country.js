import React from 'react'

const Country = ({country: { flag,name,capital,languages,population,currencies }}) => {

    const formattedLanguge = languages.map((language) => {
        return (
            language.name
        )
    }).join(', ')
    const formattedCurrencies = currencies.map((currencie) => {
        return (
            currencie.name
        )
    }).join(', ')
    return (
        <div className='bg-white pt-7 pb-10 rounded'>
            <div className='text-center'>
                <img src={flag} alt={name} className='w-64 h-36 rounded-md shadow-lg mx-auto'/>
                <h1 className='mt-10 text-2xl uppercase text-yellow-500'>{name}</h1>
            </div>
            <div className='pl-10'>   
                <h1 className='text-2xl text-gray-700 font-semibold'>Capital: 
                    <span className='font-normal text-2xl text-gray-500'> {capital}
                    </span>
                </h1>
                <h1 className='text-2xl text-gray-700 font-semibold'>Language: 
                    <span className='font-normal text-2xl text-gray-500'> {formattedLanguge}</span>
                </h1>
                <h1 className='text-2xl text-gray-700 font-semibold'>Population: 
                    <span className='font-normal text-2xl text-gray-500'> {population}</span>
                </h1>
                <h1 className='text-2xl text-gray-700 font-semibold'>Currencies: 
                    <span className='font-normal text-2xl text-gray-500'> {formattedCurrencies}</span>
                </h1>
            </div>
        </div>
    )
}   

export default Country