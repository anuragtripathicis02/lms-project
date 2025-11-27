'use client'
import React, { useEffect, useState } from 'react'

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Footer from '@/components/Footer';


import TopBanner from './TopBanner';
import GameInfo from './GameInfo';
import Matches from './Matches';
import ConfirmYourPurchase from '@/components/modalcomponents/ConfirmYourPurchase';

const CardSummery = () => {

      const [showConfirmYourPurchase, setShowConfirmYourPurchase] = useState(false);
      const handleConfirmYourPurchase = () => {
        setShowConfirmYourPurchase(true);
      };
      const handleCloseAll = () => {
        setShowConfirmYourPurchase(false);
      };

    return (
        <div className='body-content-sec dashboard-home'>
            <div className='container'>
                <TopBanner />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav className="d-flex align-items-center game-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Game Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Matches</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <GameInfo/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Matches/>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <Footer/>

            <div className='foot-section d-md-none'>
        <button className='btn-theme btn-yellow w-100' onClick={handleConfirmYourPurchase}>Buy in for 1000$</button>
      </div>

      <ConfirmYourPurchase show={showConfirmYourPurchase} handleClose={handleCloseAll} />
        </div>
    )
}

export default CardSummery
