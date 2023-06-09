import React, { useEffect, useState } from 'react';
import { routes } from '../../../routes';

import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg'

import { useDispatch, useSelector } from 'react-redux';
import { handleSlide } from '../../../redux/slideSlice';



function Sidebar() {
    const dispatch = useDispatch()

    const [url, setUrl] = useState('')


    useEffect(() => {
        setUrl(window.location.href)
    }, [])

    const handleClose = () => {
        dispatch(handleSlide(true))
    }

    return (
        <>
            <div className='w-[304px] h-full pb-[60px] pt-[20px] relative'>
                {/* LOGO */}
                <div className='mb-[35px] pl-[60px] mid'>
                    <img src="/imgs/logo.png" alt="" />
                </div>
                {/* LINK LIST */}
                <div>
                    {
                        routes.map((route, i) => (
                            <a href={route.link} key={i} className={`flex items-center mb-[24px] pl-[60px] my-list relative ${route.active ? `my-active` : ''}`} onClick={handleClose}>
                                <div className='w-[20px] h-[20px] flex items-center content-center py-[2px] list-icon'>{route.icon} </div>
                                <span className='text-base ml-[12px] list-title'>{route.title}</span>
                            </a>
                        )).slice(0, 4)
                    }
                    <div className='text-my-text-color text-[12px] ml-[60px] mt-[8px] mb-[20px]' style={{ fontFamily: 'sohne-extra' }}>OTHERS 1</div>
                    {
                        routes.map((route, i) => (
                            <a href={route.link} key={i} className={`flex items-center mb-[24px] pl-[60px] my-list relative`} onClick={handleClose}>
                                <div className='w-[20px] h-[20px] flex items-center content-center py-[2px] list-icon'>{route.icon} </div>
                                <span className='text-base ml-[12px] list-title'>{route.title}</span>
                            </a>
                        )).slice(4, 6)
                    }
                    <div className='text-my-text-color text-[12px] ml-[60px] mt-[8px] mb-[20px]' style={{ fontFamily: 'sohne-extra' }}>OTHERS 2</div>
                    {
                        routes.map((route, i) => (
                            <a href={route.link} key={i} className={`flex items-center mb-[24px] pl-[60px] my-list relative`} onClick={handleClose}>
                                <div className='w-[20px] h-[20px] flex items-center content-center py-[2px] list-icon'>{route.icon} </div>
                                <span className='text-base ml-[12px] list-title'>{route.title}</span>
                            </a>
                        )).slice(6, 8)
                    }
                </div>

                {/* SIDE FOOTER */}
                <div className="absolute flex justify-between items-center  left-0 bottom-7 w-[89%] pl-[45px] pr-[16px]">

                    <div className='flex items-center'>
                        <img src="/imgs/1.png" alt="image 1" className='rounded-full' />
                        <span className='text-my-text-color ml-3'>Blessing Daniels </span>
                    </div>
                    <div><MoreIcon /></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar