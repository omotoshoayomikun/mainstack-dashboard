import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.css'
// import { Button } from '../Forms/Button';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { handleSlide } from '../../../redux/slideSlice';
import store from '../../../redux/store'

function Header() {

    const dispatch = useDispatch();


    const barBoolean = useSelector(state => state.slide.bar)

    const [view, setView] = useState(!barBoolean)

    const handleToggle = () => {
        setView(!view)
        dispatch(handleSlide(!barBoolean))
    }

    useEffect(() => {

    }, [barBoolean])

    return (
        <>
            <Provider store={store}>
                {/* THIS IS THE HEADER DISPLAY IN SMALLER SCREEN */}
                <header className={styles.header}>
                    <div className="" style={{ width: '208px' }}>
                        {/* <Button text='Welcome Keerthi' icon='/icons/light.svg' /> */}
                    </div>
                    <div className="cursor-pointer h-[30px] w-12 relative" onClick={handleToggle}>
                        <span className={`menu_btn__burger  ${barBoolean ? '' : 'open'}`}></span>
                    </div>
                </header>
                {/* //////////////////////////////////////////// */}
            </Provider>
        </>
    )
}

export default Header