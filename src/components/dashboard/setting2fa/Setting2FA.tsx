'use client'
import Link from 'next/link'
import Image from "next/image";
import CodeVerificationModal from '@/components/modalcomponents/CodeVerificationModal'
import React, { useState } from 'react'

const Setting2FA = () => {

      const [showCodeVerification, setShowCodeVerification] = useState(false);
      const handleCodeVerification = () => {
        setShowCodeVerification(true);
      };
      const handleCloseAll = () => {
        setShowCodeVerification(false);
      };

  return (
    <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-40 mb-mobile'>Select one or both ways to get a code to verify when anyone tries to login.</p>
                
                 <div className='setting-card mb-32'>
                    <div className='setting-card-bg'>
                        <div className='setting-item d-flex align-items-center'>
                            <div className='me-auto'>
                                <h5>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.25 9.75C8.25 9.55109 8.32902 9.36032 8.46967 9.21967C8.61032 9.07902 8.80109 9 9 9H15C15.1989 9 15.3897 9.07902 15.5303 9.21967C15.671 9.36032 15.75 9.55109 15.75 9.75C15.75 9.94891 15.671 10.1397 15.5303 10.2803C15.3897 10.421 15.1989 10.5 15 10.5H9C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75ZM9 13.5H15C15.1989 13.5 15.3897 13.421 15.5303 13.2803C15.671 13.1397 15.75 12.9489 15.75 12.75C15.75 12.5511 15.671 12.3603 15.5303 12.2197C15.3897 12.079 15.1989 12 15 12H9C8.80109 12 8.61032 12.079 8.46967 12.2197C8.32902 12.3603 8.25 12.5511 8.25 12.75C8.25 12.9489 8.32902 13.1397 8.46967 13.2803C8.61032 13.421 8.80109 13.5 9 13.5ZM21.75 5.25V17.25C21.75 17.6478 21.592 18.0294 21.3107 18.3107C21.0294 18.592 20.6478 18.75 20.25 18.75H14.5847L13.3022 20.9944C13.171 21.2239 12.9814 21.4146 12.7527 21.5473C12.5241 21.68 12.2644 21.7499 12 21.7499C11.7356 21.7499 11.4759 21.68 11.2473 21.5473C11.0186 21.4146 10.829 21.2239 10.6978 20.9944L9.41531 18.75H3.75C3.35218 18.75 2.97064 18.592 2.68934 18.3107C2.40804 18.0294 2.25 17.6478 2.25 17.25V5.25C2.25 4.85218 2.40804 4.47064 2.68934 4.18934C2.97064 3.90804 3.35218 3.75 3.75 3.75H20.25C20.6478 3.75 21.0294 3.90804 21.3107 4.18934C21.592 4.47064 21.75 4.85218 21.75 5.25ZM20.25 5.25H3.75V17.25H9.85031C9.9831 17.2488 10.1138 17.2829 10.2291 17.3488C10.3444 17.4147 10.4402 17.51 10.5066 17.625L12.0066 20.25L13.5066 17.625C13.573 17.51 13.6687 17.4147 13.784 17.3488C13.8993 17.2829 14.03 17.2488 14.1628 17.25H20.25V5.25Z" fill="currentColor"/>
</svg>

Using SMS</h5>
                                <p className='m-0'>Get a one time code (OTP) using text SMS on your registered mobile number.</p>
                            </div>
                            <div className='ml-auto'>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className='setting-item d-flex align-items-center'>
                            <div className='me-auto'>
                                <h5><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0716 6L12 12.4828L4.92844 6H19.0716ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z" fill="currentColor"/>
</svg>
 Using Email</h5>
                                <p className='m-0'>Get a one time code (OTP) using email on your registered email id.</p>
                            </div>
                            <div className='ml-auto'>
                                <label className="switch">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='foot-button'>
                    <button className='btn-theme btn-yellow btn-shadow' onClick={handleCodeVerification}>Activate TFA</button>
                </div>
            </div>
            <CodeVerificationModal show={showCodeVerification} handleClose={handleCloseAll}/>
        </div>
  )
}

export default Setting2FA
