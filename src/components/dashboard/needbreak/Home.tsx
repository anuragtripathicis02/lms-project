import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import NeedBreak from './NeedBreak'
import BackLink from './BackLink'

const Home = () => {
  return (
     <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <NeedBreak/>
    </div>
        
    </>
  )
}

export default Home
