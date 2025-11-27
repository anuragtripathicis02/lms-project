import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import AppSettings from './AppSettings'

const Home = () => {
  return (
   <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <AppSettings/>
    </div>
    </>
  )
}

export default Home
