'use client'
import React, { useEffect, useState } from 'react'

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Footer from '@/components/Footer';


import TopBanner from './TopBanner';
import LMSRules from './LMSRules';
import PreviousMatches from './PreviousMatches';

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
                            <Nav.Link eventKey="second">Matches</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Players</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="four">History</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <LMSRules/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <PreviousMatches/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            3
                        </Tab.Pane>
                        <Tab.Pane eventKey="four">
                            4
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <Footer />
        </div>
    )
}

export default CardSummery
