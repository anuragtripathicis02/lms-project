import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import Notification from './Notification'
import BackLink from './BackLink'
import Footer from '@/components/Footer'


const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <Notification/>
        <Footer/>        
    </div>
    </>
  )
}

export default Home
