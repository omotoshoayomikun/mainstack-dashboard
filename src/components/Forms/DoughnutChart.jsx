import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function DoughnutChart(props) {

    const { ...datas } = props

    const [chartData, setChartData] = useState({
        // labels: [],
        datasets: [{
            data: [],
        }],
    })

    useEffect(() => {
        async function data() {
            setChartData({
                //    labels: Object.values(datas).map((data) => data.country),
                datasets: [{
                    data: Object.values(datas).map((data) => data.percent),
                    backgroundColor: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#FF5403']
                }],
            })
        }

        data()
    }, [])

    if (datas) {
        return (
            <>
                <div className="items-center flex w-[150px]">
                    <Doughnut data={chartData} />
                </div>
            </>
        )
    }

}

export default DoughnutChart