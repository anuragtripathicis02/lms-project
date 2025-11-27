import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'

import BackLink from './BackLink'
import Setting2FA from './Setting2FA'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <Setting2FA/>            
    </div>
    </>
  )
}

export default Home
