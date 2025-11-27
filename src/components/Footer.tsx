import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className='session-text'><b>Session : 0h 00m 48s | 12h 15m 26s AEDT</b> </p>
            <p><b>BetStop – the National Self-Exclusion Register™</b>  BetStop is a free service by the Australian Government that allows individuals to self-exclude from all licensed Australian online and phone wagering providers. <Link href="" className='link-underline-text'>www.betstop.gov.au</Link></p>

            <p>Licensed wagering operators in Australia are regulated under strict laws. Sportsbet’s gambling operations in South Australia are governed by the South Australian Gambling Codes of Practice and regulated by the Northern Territory Racing Commission.</p>

            <p>@2025 LMS, All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
