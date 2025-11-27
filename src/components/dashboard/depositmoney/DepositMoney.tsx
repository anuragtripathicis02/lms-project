import Link from 'next/link'
import React from 'react'
import { Form } from 'react-bootstrap'

const DepositMoney = () => {
    return (
        <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-mobile'>Enter the amount you want to add to your game wallet. Most frequently added by players are:</p>
                <div className="amount-options mb-40">
                    <button className="amount-button"><span className='font-medium'>A$</span> 200</button>
                    <button className="amount-button"><span className='font-medium'>A$</span> 500</button>
                    <button className="amount-button"><span className='font-medium'>A$</span> 700</button>
                    <button className="amount-button"><span className='font-medium'>A$</span> 1200</button>
                    <button className="amount-button active">Custom</button>
                </div>
                <div className="amount-input-group mb-3 depositmoney-input">
                     <Form.Control type="email" placeholder="350" />
                    <span className="currency-sign">
                        A$
                    </span>
                </div>
                 <p className="info-text">
                Responsible play is active, you can't add more then <strong>A$ 900</strong> today. <Link href="" className='link-underline-text'>Know More</Link>
            </p>
            <div className='foot-button'>
                <button className='btn-theme btn-yellow btn-shadow'>Proceed to Deposit</button>
            </div>
            </div>
        </div>
    )
}

export default DepositMoney
