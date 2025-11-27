import Link from 'next/link'
import React from 'react'
import { Form } from 'react-bootstrap'

const SettingLimit = () => {
    return (
        <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-40 mb-mobile'>Stay in control with Responsible Play by setting how much you want to deposit daily, weekly, or monthly in the game’s wallet. The minimum limit is $5, and you can change it anytime from your settings.</p>
                <p className='mb-1'>Set a duration for which you want to set the limit:</p>
                <div className="amount-options mb-40">
                    <button className="amount-button">1 Days</button>
                    <button className="amount-button">7 Days</button>
                    <button className="amount-button active">14 Days</button>
                    <button className="amount-button">28 Days</button>
                </div>
                <p className='mb-1'>Enter max amount you want to set as deposit limit:</p>
                <div className="amount-input-group depositmoney-input mb-3">
                    <Form.Control type="email" placeholder="350" />
                    <span className="currency-sign">A$</span>
                </div>
                
                <div className='foot-button'>
                    <button className='btn-theme btn-yellow btn-shadow'>Set Deposit limit</button>
                </div>
            </div>
        </div>
    )
}

export default SettingLimit
