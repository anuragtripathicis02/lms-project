'use client'
import React, { useEffect, useState } from 'react'

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Footer from '@/components/Footer';


import TopBanner from './TopBanner';
import EleminatedbyWrongPickHistory from './EleminatedbyWrongPickHistory';

const CardSummery = () => {


    return (
        <div className='body-content-sec dashboard-home'>
            <div className='container'>
                <TopBanner />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav className="d-flex align-items-center game-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">History</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            Details
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <EleminatedbyWrongPickHistory/>
                        </Tab.Pane>
                        
                    </Tab.Content>
                </Tab.Container>
            </div>
            <Footer/>

            <div className='foot-section d-md-none'>
        <button className='btn-theme btn-yellow w-100'>Withdraw Winnings</button>
      </div>

      
        </div>
    )
}

export default CardSummery
