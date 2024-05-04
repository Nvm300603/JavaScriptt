import React from 'react'
import Header  from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Home = () => {
  return (
    <div className='w-ful flex flex-col items-center h-full '>
        <Header />
        <Navigation/>
        <div className='W-1100 flex flex-col items-center justify-start'>
            <Outlet />
        </div>

    </div>
  )
}

export default Home