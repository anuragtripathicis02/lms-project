import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import UserProfileInfo from './UserProfileInfo'

const Home = () => {
    return (
        <>
            <DashBoardHeader />
            <Sidebar />
            <div className='main-content'>
                    <UserProfileInfo/>
            </div>
        </>
    )
}

export default Home
