import React, {useState} from 'react'
import LanguageChart from '../Chart/LanguageChart'
import PopulationChart from '../Chart/PopulationChart'

const Graph = ({ populationData,worldTotal,languagesData }) => {
    const [chart,setChart] = useState('population')

    const populationClick = () => {
        setChart('population')
    }
    const languagesClick = () => {
        setChart('languages')
    }
    return (
        <div className='pt-10 pb-8' id='graph'>
            <div className='text-center bg-gray-50 pt-3 pb-5'>
                <div className='flex justify-center mb-4'>
                    <button onClick={populationClick} className='mr-3 px-5 py-2 bg-yellow-500 rounded text-2xl text-gray-800'>Population</button>
                    <button onClick={languagesClick} className='mr-3 px-5 py-2 bg-yellow-500 rounded text-2xl text-gray-800'>Languages</button>
                </div>
                <h4 className='text-2xl font-semibold'>{chart==='languages' ? '10 Most spoken languages in the world' : '10 Most populated countries in the world'}</h4>
            </div>
            <div className='px-5 py-5 bg-gray-200'>
                {chart==='languages' ? <LanguageChart chartData={languagesData}/> : <PopulationChart worldTotal={worldTotal} chartData={populationData}/>}
            </div>
        </div>
    )
}

export default Graph