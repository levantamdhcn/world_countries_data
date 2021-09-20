import React from 'react'

const ChartRow = ({ name,max,barWidth }) => {
    return (
        <div className='flex mx-auto mb-2'>
            <div className='w-3/12 text-left'>
                <h1 className='text-2xl font-semibold'>{name === 'United States of America' ? 'USA' : name}</h1>
            </div>
            <div className='w-6/12 h-8 mr-2'>
                <div style={{width: `${barWidth}%`}} className='bg-yellow-500 h-full rounded'>

                </div>
            </div>
            <div className='w-2/12'>
                <h1 className='text-2xl font-semibold'>{max}</h1>
            </div>
        </div>
    )
}

export default ChartRow