'use client'
import React from 'react'
import Sidebar from '../Sidebar'
import DashBoardHeader from '../DashBoardHeader'
import HomeOnboarding from './HomeOnboarding'

const Home = () => {
  return (
    <>
      <DashBoardHeader />
      <Sidebar />
      <div className='main-content'>
        <HomeOnboarding />
      </div>
    </>
  )
}

export default Home
