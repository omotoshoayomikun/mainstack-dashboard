import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.css'
// import { Button } from '../Forms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { handleSlide } from '../../../redux/slideSlice';

function Header() {

    const dispatch = useDispatch();


    const barBoolean = useSelector(state => state.slide.bar)

    const [view, setView] = useState(!barBoolean)

    useEffect(() => {
        console.log('refresh header')
    }, [barBoolean])

    const handleToggle = () => {
        setView(!view)
        dispatch(handleSlide(view))
    }

    return (
        <>

            {/* THIS IS THE HEADER DISPLAY IN SMALLER SCREEN */}
            <header className={styles.header}>
                <div className="" style={{ width: '208px' }}>
                    {/* <Button text='Welcome Keerthi' icon='/icons/light.svg' /> */}
                </div>
                <div className="cursor-pointer h-[30px] w-12 relative" onClick={handleToggle}>
                    <span className={`menu_btn__burger  ${view ? 'open': ''}`}></span>
                </div>
            </header>
            {/* //////////////////////////////////////////// */}
        </>
    )
}

export default Header