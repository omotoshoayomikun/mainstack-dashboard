import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

import { Chart as chartjs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)
import axios from 'axios'

function LineChart() {

    const [lineChart, setLineChart] = useState({
        labels: '',
        datasets: [{
            data: [],
            borderColor: '#FF5403',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.2
        }]
    })

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },

            y: {
                max: 120,
                min: 0
            },
            // ticks: {
            //     stepSize: 2,
            //     callback: (value) => value + 'K'
            // },
            // grid: {
            //     borderDash: [10]
            // }
        }
    }

    useEffect(() => {
        async function line() {
            try {
                const datas = await axios.get('https://fe-task-api.mainstack.io/')
                // setLineChart(datas.data)
                // console.log()
                setLineChart({
                    labels: Object.keys(datas.data['graph_data']['views']),
                    datasets: [{
                        labels: ['Page Views'],
                        data: Object.values(datas.data['graph_data']['views']),
                        borderColor: '#FF5403',
                        pointBorderColor: 'transparent',
                        pointBorderWidth: 4,
                        tension: 0.2
                        // borderDash: [10]

                    }],
                })
            } catch (error) {
                console.log(error)
            }
        }

        line()
    }, [])

    return (
        <>
            <div className="pb-6 relative h-[370px] w-full">
                <div className="absolute w-full h-full">
                <Line data={lineChart} options={options} />
                </div>
            </div>
        </>
    )
}

export default LineChart