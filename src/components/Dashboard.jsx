import React, { useEffect, useState } from 'react';
import { Btn1 } from './Forms/Buttons';
import { Card } from './Forms/Cards';
import axios from 'axios';
import LineChart from './Forms/LineChart';
import { ReactComponent as InfoIcon } from '../assets/icons/info.svg';

import styles from '../styles/Dashboard.module.css'

function Dashboard() {

    const [datas, setDatas] = useState([])
    const [totalPage, setTotalPage] = useState()

    console.log(datas.graph_data)

    const colors = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#FF5403'];
    let z = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('https://fe-task-api.mainstack.io/')
                const revData = data.data
                setDatas(revData)

                // const pageData = Object.values(revData['graph_data']['views'])
                // for(let i = 0; i < pageData.length; i++) {
                //     setTotalPage(totalPage => totalPage + pageData[i])
                // }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <div className={styles.container}>
                <h2 className='text-xl font-bold mb-[46px]'>Dashboard</h2>
                <div className="flex justify-between items-center mb-[23px]">
                    <div>
                        <h1 className="font-bold text-2xl mb-[10px]">Good morning, Blessing ⛅️</h1>
                        <p className='text-sm text-[#31373D] font-thin'>Check out your dashboard summary.</p>
                    </div>
                    <div>
                        <Btn1 title='View  analytics' />
                    </div>
                </div>
                {/* BADGES */}
                <div className="flex mb-6 overflow-x-auto">
                    <div className="text-sm py-3 px-4 border border-solid border-my-grey border-radius rounded-[100px] text-my-black mr-3">1 Day</div>
                    <div className="text-sm py-3 px-4 border border-solid border-my-grey border-radius rounded-[100px] text-my-black mr-3">3 Days</div>
                    <div className="text-sm py-3 px-4 border border-solid border-my-grey border-radius rounded-[100px] text-my-black mr-3">7 Days</div>
                    <div className="text-sm py-3 px-4 border border-solid border-my-grey border-radius rounded-[100px] text-my-black mr-3">30 Days</div>
                    <div className="text-sm py-3 px-4 border border-solid border-my-orange border-radius rounded-[100px] text-my-orange bg-[#FFEEE5] mr-3">All Time</div>
                    <div className="text-sm py-3 px-4 border border-solid border-my-grey border-radius rounded-[100px] text-my-black mr-3">Custom Date</div>
                </div>

                {/* GRAPH CARD */}

                <div className="w-full h-[576px] border border-my-grey rounded-xl mb-6 px-6 pt-8 pb-[22px]">
                    <div className="flex justify-between">
                        <div className="font-bold text-lg mb-2">Page Views</div>
                        <div className='cursor-pointer'>
                            <InfoIcon />
                        </div>
                    </div>
                    <p className='text-sm text-my-text-color mb-6'>All time</p>
                    <h1 className="text-5xl font-extrabold mb-[20px]">
                        {
                            datas.graph_data ? Object.values(datas.graph_data.views).reduce((a, b) => {return a + b})
                                : 0
                        }
                    </h1>

                    <LineChart />
                </div>

                <div className={styles.das_flex}>
                    <div className="basis-full">
                        <Card {...datas.top_locations} title='Top Locations' color={colors} />
                    </div>
                    <div className="basis-full flex relative">
                        <Card {...datas.top_sources} title='Top Referral source' color={colors} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard