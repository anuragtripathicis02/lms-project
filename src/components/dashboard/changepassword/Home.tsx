import React from 'react'
import ChangePassword from './ChangePassword'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <ChangePassword/>
    </div>
    </>
  )
}

export default Home
