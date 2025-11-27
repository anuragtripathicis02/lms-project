import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import MyGames from './MyGames'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content fix-footer'>
        <MyGames/>
        <Footer/>
    </div>
    </>
  )
}

export default Home
