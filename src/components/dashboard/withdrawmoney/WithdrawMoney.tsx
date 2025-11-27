'use client'
import BankingInformationModal from '@/components/modalcomponents/BankingInformationModal'
import Link from 'next/link'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const WithdrawMoney = () => {

    const [showTransactionHistory, setShowTransactionHistory] = useState(false);
    const handleTransactionHistory = () => {
        setShowTransactionHistory(true);
    };
    const handleCloseAll = () => {
        setShowTransactionHistory(false);
    };

    return (
        <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-mobile'>Please Enter the amount you want to withdraw from your game wallet to your bank account.</p>

                <div className="amount-input-group depositmoney-input mb-40">
                    <Form.Control type="email" placeholder="350" />
                    <span className="currency-sign">
                        A$
                    </span>
                </div>

                <div className='bank-list mb-3'>
                    <p className='mb-1'>Withdrawing to:</p>
                    <div className='d-lg-flex'>
                        <div className='bank-info-card'>
                            <div className='d-flex align-items-center'>
                                <div className='icon'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M2.25 9.74953H4.5V15.7495H3C2.80109 15.7495 2.61032 15.8285 2.46967 15.9692C2.32902 16.1099 2.25 16.3006 2.25 16.4995C2.25 16.6984 2.32902 16.8892 2.46967 17.0299C2.61032 17.1705 2.80109 17.2495 3 17.2495H21C21.1989 17.2495 21.3897 17.1705 21.5303 17.0299C21.671 16.8892 21.75 16.6984 21.75 16.4995C21.75 16.3006 21.671 16.1099 21.5303 15.9692C21.3897 15.8285 21.1989 15.7495 21 15.7495H19.5V9.74953H21.75C21.9132 9.74937 22.0719 9.69599 22.202 9.59748C22.3321 9.49898 22.4265 9.36073 22.4709 9.20371C22.5153 9.04669 22.5073 8.87946 22.4481 8.72739C22.3889 8.57533 22.2817 8.44673 22.1428 8.3611L12.3928 2.3611C12.2747 2.28846 12.1387 2.25 12 2.25C11.8613 2.25 11.7253 2.28846 11.6072 2.3611L1.85719 8.3611C1.71828 8.44673 1.61108 8.57533 1.55187 8.72739C1.49266 8.87946 1.48466 9.04669 1.52908 9.20371C1.57351 9.36073 1.66793 9.49898 1.79803 9.59748C1.92814 9.69599 2.08681 9.74937 2.25 9.74953ZM6 9.74953H9V15.7495H6V9.74953ZM13.5 9.74953V15.7495H10.5V9.74953H13.5ZM18 15.7495H15V9.74953H18V15.7495ZM12 3.87985L19.1006 8.24953H4.89937L12 3.87985ZM23.25 19.4995C23.25 19.6984 23.171 19.8892 23.0303 20.0299C22.8897 20.1705 22.6989 20.2495 22.5 20.2495H1.5C1.30109 20.2495 1.11032 20.1705 0.96967 20.0299C0.829018 19.8892 0.75 19.6984 0.75 19.4995C0.75 19.3006 0.829018 19.1099 0.96967 18.9692C1.11032 18.8286 1.30109 18.7495 1.5 18.7495H22.5C22.6989 18.7495 22.8897 18.8286 23.0303 18.9692C23.171 19.1099 23.25 19.3006 23.25 19.4995Z" fill="currentColor" />
                                    </svg>

                                </div>
                                <div className='content-right'>
                                    <h4 className="bank-name">John Doe <span className="account-mask">(**********234)</span></h4>
                                    <p className="institution-name">Commonwealth Bank(CBA)</p>
                                </div>
                            </div>
                        </div>
                        <Link href="javascript:void(0)" onClick={handleTransactionHistory} className='edit-info link-underline-text'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.3103 6.87915L17.1216 2.68946C16.9823 2.55014 16.8169 2.43962 16.6349 2.36421C16.4529 2.28881 16.2578 2.25 16.0608 2.25C15.8638 2.25 15.6687 2.28881 15.4867 2.36421C15.3047 2.43962 15.1393 2.55014 15 2.68946L3.43969 14.2507C3.2998 14.3895 3.18889 14.5547 3.11341 14.7367C3.03792 14.9188 2.99938 15.114 3.00001 15.311V19.5007C3.00001 19.8985 3.15804 20.2801 3.43935 20.5614C3.72065 20.8427 4.10218 21.0007 4.50001 21.0007H8.6897C8.88675 21.0013 9.08197 20.9628 9.26399 20.8873C9.44602 20.8118 9.61122 20.7009 9.75001 20.561L21.3103 9.00071C21.4496 8.86142 21.5602 8.69604 21.6356 8.51403C21.711 8.33202 21.7498 8.13694 21.7498 7.93993C21.7498 7.74292 21.711 7.54784 21.6356 7.36583C21.5602 7.18382 21.4496 7.01844 21.3103 6.87915ZM8.6897 19.5007H4.50001V15.311L12.75 7.06102L16.9397 11.2507L8.6897 19.5007ZM18 10.1895L13.8103 6.00071L16.0603 3.75071L20.25 7.93946L18 10.1895Z" fill="currentColor" />
                            </svg>
                            Edit Bank Info</Link>
                    </div>
                </div>

                <div className='foot-button'>
                    <button className='btn-theme btn-yellow btn-shadow'>Withdraw Money</button>
                </div>
            </div>
            <BankingInformationModal show={showTransactionHistory} handleClose={handleCloseAll} />
        </div>
    )
}

export default WithdrawMoney
