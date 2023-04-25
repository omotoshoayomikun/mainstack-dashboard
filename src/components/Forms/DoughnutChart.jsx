import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

import { Chart as chartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function DoughnutChart(props) {

    const { ...datas } = props

    console.log(datas)

    const [chartData, setChartData] = useState({
        datasets: [{
            data: Object.values(datas).map(data => data.percent)
        }]
    })

    // console.log(list)
    console.log(chartData)

    return (
        <>
            <div className="items-center flex w-[150px]">
                <Doughnut data={chartData} />
            </div>
        </>
    )

}

export default DoughnutChart