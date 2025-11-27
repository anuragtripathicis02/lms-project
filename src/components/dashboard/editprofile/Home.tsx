import React from 'react'
import EditProfile from './EditProfile'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'

const Home = () => {
  return (
    <>
      <DashBoardHeader />
      <Sidebar />
      <div className='main-content'>
        <BackLink />
        <EditProfile />
      </div>
    </>
  )
}

export default Home
