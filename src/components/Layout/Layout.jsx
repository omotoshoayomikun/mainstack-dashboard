import React from 'react'
import Sidebar from './Sidebar'

function Layout({children}) {
  return (
    <>
    <div className='flex relative'>
        <div className='w-[304px] p-0 h-full fixed border-r border-solid border-my-grey'>
            <Sidebar />
        </div>
        <div className='w-full ml-[304px]'>
            {children}
        </div>
    </div>
    </>
  )
}

export default Layout