'use client'
import IntroModal from '@/components/modalcomponents/IntroModal'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import CountdownCard from './CountdownCard';
import SearchBar from './SearchBar';
import TopSlider from './TopSlider';
import SportsTabs from './SportsTabs';
import SeasonCountdown from './SeasonCountdown';
import ExploreGames from './ExploreGames';
import Alertbar from './Alertbar';



const HomeOnboarding = () => {

const [showIntromodal, setShowIntromodal] = useState(false); 
const handleIntromodal = () => { setShowIntromodal(true); };

const handleCloseAll = () => { setShowIntromodal(false); };

useEffect(() => { setShowIntromodal(true); }, []);

  return (
    <div className='body-content-sec'>
      <Alertbar />
      <div className='container'>
        <SearchBar />
        <TopSlider />
        <SportsTabs />
        <SeasonCountdown />
        <ExploreGames />
      </div>
      <IntroModal show={showIntromodal} handleClose={handleCloseAll} />
      
      <Footer />
    </div>
  )
}

export default HomeOnboarding
