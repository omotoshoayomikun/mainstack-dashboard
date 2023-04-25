import React from 'react'
import { Btn1 } from './Buttons'
import DoughnutChart from './DoughnutChart'

export const Card = (props) => {

    const { title,...detials } = props;

    return (
        <>
            <div className="w-full p-6 border border-my-grey rounded-xl h-[340px]">
                <div className="flex justify-between mb-[42px]">
                    <h1 className="text-lg font-bold">{title}</h1>
                    <Btn1 title='View full reports' />
                </div>
                <div className="flex justify-between">
                    <div className="">
                        {
                            detials && (
                                Object.values(detials).map((detail, i) => (
                                    <div key={i} className="flex items-center mb-[15px]">
                                        <div className='mr-2 w-5 h-5 items-center justify-center flex'>
                                            <img src={detail.country ? `/imgs/${detail.country.split(' ').shift()}.svg` : `/imgs/${detail.source.split(' ').shift()}.svg`} alt=" svg" />
                                        </div>
                                        <span className='mr-2 text-base'>{detail.country || detail.source}</span>
                                        <span className='mr-3 text-base'>{detail.percent} %</span>
                                        <span className="w-3 h-3 rounded-[50%] bg-red-700"></span>
                                    </div>
                                ))
                            )
                        }
                    <div className="flex items-center">
                        <div className="mr-2 w-5 h-5"></div>
                        <span className='mr-2 text-base'>Others</span>
                        <span className='mr-3 text-base'>25 %</span>
                        <span className="w-3 h-3 rounded-[50%] bg-[#F09468]"></span>
                    </div>
                    </div>
                    <DoughnutChart {...detials} />
                </div>
            </div>
        </>
    )
}
