import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import BackLink from './BackLink'
import TermsAndCondition from './TermsAndCondition'

const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
        <BackLink/>
        <TermsAndCondition/>
    </div>
    </>
  )
}

export default Home
