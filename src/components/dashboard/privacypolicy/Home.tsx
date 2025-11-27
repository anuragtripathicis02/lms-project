import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'
import PrivacyPolicy from './PrivacyPolicy'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <PrivacyPolicy/>
    </div>
    </>
  )
}

export default Home
