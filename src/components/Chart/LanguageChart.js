import React from "react";
import ChartRow from "./ChartRow";

const LanguageChart = ({ chartData }) => {

    const formattedRow = chartData.map(({ name,max },index) => {
        return (
            <li key={index}><ChartRow name={name} max={max} barWidth={max}/></li>
        )
    })
    return (
        <div className='mx-auto w-3/4 shadow-sm p-5'>
            <ul>
                {formattedRow}
            </ul>
        </div>
    )
}   

export default LanguageChart