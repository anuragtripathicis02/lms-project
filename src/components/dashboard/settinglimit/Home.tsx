import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'
import SettingLimit from './SettingLimit'

const Home = () => {
  return (
     <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <SettingLimit/>
    </div>
    </>
  )
}

export default Home
