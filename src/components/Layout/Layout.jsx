import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { handleSlide } from '../../../redux/slideSlice'

import styles from '../../styles/Layout.module.css'


function Layout({ children }) {

  const dispatch = useDispatch()

  const barBoolean = useSelector(state => state.slide.bar)

  const handleOverlay = () => {
    dispatch(handleSlide(true))
  }


  return (
    <>
      <div className="z-30">
        <Header />
      </div>
      <div className={styles.container}>

        <div className={``}>
          {/* SIDE BAR FOR BIG SCREEN */}
          <div className={` ${styles.big_screen}`}><Sidebar /></div>
          {/* SIDE BAR FOR SMALL SCREEN */}
          <div className={`${styles.small_screen} trans  ${barBoolean ? 'ml-[-272px]' : 'ml-0'}`}>
            <Sidebar />
          </div>
        </div>


        {/* <div className='w-[304px] p-0 h-full fixed border-r border-solid border-my-grey'>
          <Sidebar />
        </div> */}
        <main className={`${styles.main} `}>
          {children}
        </main>
      </div>
       {/* OVERLAY BACKGROUND  */}
       <div className={`${styles.overlay} trans ${barBoolean? 'invisible': 'visible'}`} onClick={handleOverlay}></div>
    </>
  )
}

export default Layout