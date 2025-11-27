'use client'
import React from 'react'
import Login from './Login'
import DashBoardHeader from '@/components/dashboard/DashBoardHeader'

const Home = () => {
  return (
    <div>
      <Login/>
      <div className='d-none'>
        <DashBoardHeader/>
      </div>
    </div>
  )
}

export default Home
