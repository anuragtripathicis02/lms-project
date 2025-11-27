import React from 'react'
import MyWallet from './MyWallet'
import TransactionHistory from './TransactionHistory'
import DashBoardHeader from '../DashBoardHeader'
import Sidebar from '../Sidebar'


const Home = () => {
  return (
    <>
    <DashBoardHeader/>
    <Sidebar/>
    <div className='main-content'>
    <div className='body-content-sec p-40'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
              <div className='my-wallet mb-md-5 mb-4'>
                  <MyWallet />
              </div>
          </div>
          <div className='col-md-12'>
              <div className='transaction-history'>
                <TransactionHistory />
              </div>
          </div>
        </div> 
      </div>
    </div>
    </div>
    </>
  )
}

export default Home