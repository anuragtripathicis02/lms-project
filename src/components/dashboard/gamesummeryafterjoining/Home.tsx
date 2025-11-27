import React from 'react'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'
import CardSummery from './CardSummery'

const Home = () => {
    return (
        <>
            <DashBoardHeader />
            <Sidebar />
            <div className='main-content'>
                <CardSummery/>
            </div>
        </>
    )
}

export default Home
