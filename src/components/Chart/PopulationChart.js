import React from "react";
import ChartRow from "./ChartRow";

const PopulationChart = ({ chartData,worldTotal }) => {

    const formattedRow = chartData.map(({ name,max },index) => {
        return (
            <li key={index}><ChartRow name={name} max={max} barWidth={max/worldTotal*100}/></li>
        )
    })
    return (
        <div className='mx-auto w-3/4'>
            <ul>
                <li><ChartRow name='World' max={worldTotal} barWidth={100}/></li>
                {formattedRow}
            </ul>
        </div>
    )
}   

export default PopulationChart