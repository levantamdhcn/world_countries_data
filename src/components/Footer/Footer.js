import React from 'react'
import backHome from 'D:/F8-Course/JavaScript Basic/ReactJS/project-day-22/src/assets/images/arrow-144-24.png'

const Footer = () => {
    return (
        <div className='text-center pb-20 pt-4 mt-2 bg-gray-200 px-5'>
            <h1 className='text-4xl mb-3'>Copyright ©2020 30 Days Of React</h1>
            <h1 className='text-4xl mb-6'>
                Join
                <a href='https://github.com/Asabeneh/30-Days-Of-React' className='text-blue-400'> 30 Days of React challenge</a>
            </h1>
            <p>Designed and Built by 
                <a href='https://www.linkedin.com/in/asabeneh/' className='text-blue-400'> Asabeneh Yetayeh</a>
            </p>
            <a href='#home' className='float-right'>
                <img src={backHome} alt='back home' className='w-12'/>
            </a>
        </div>
    )
}

export default Footer