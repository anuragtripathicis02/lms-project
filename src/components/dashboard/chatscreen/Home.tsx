import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import ChatScreen from './ChatScreen'
import BackLink from './BackLink'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <ChatScreen/>
    </div>
    </>
  )
}

export default Home
