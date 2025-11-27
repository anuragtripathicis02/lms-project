import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <ContactUs/>
    </div>
    </>
  )
}

export default Home
