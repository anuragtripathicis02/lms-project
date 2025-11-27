import React from 'react'
import WithdrawMoney from './WithdrawMoney'
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
        <WithdrawMoney/>
    </div>
    </>
    
  )
}

export default Home
