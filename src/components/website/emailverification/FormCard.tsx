'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import Verification from "../../../../public/images/email-verification.png";
import VerificationMobileBlack from "../../../../public/images/email-verification-mobile-black.png";


const FormCard = () => {
    return (
        <>
            <div className='form-wrapper-main'>
                <div className='form-card-box'>
                    <div className='card-form-body text-center'>
                        <div className='figure-box-img mb-24'>
                            <Image src={Verification} alt='' className='img-theme-white' />
                            <Image src={VerificationMobileBlack} alt='' className='img-theme-black' />

                        </div>
                        <div className='text-center mb-40 mx-480'>
                            <p className='font-20 mb-mobile'>We’ve sent a confirmation link to your registered email: <b>jo****e@gmail.com </b>
                            </p>
                            <p className='font-20 mb-mobile'>Please check your inbox and click the link to verify your account.</p>

                        </div>
                        <p>
                            <Link href="" className='link-underline-text font-20'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M10.25 14.25C10.25 14.4489 10.171 14.6397 10.0303 14.7803C9.88968 14.921 9.69891 15 9.5 15H5.75C5.55109 15 5.36032 14.921 5.21967 14.7803C5.07902 14.6397 5 14.4489 5 14.25C5 14.0511 5.07902 13.8603 5.21967 13.7197C5.36032 13.579 5.55109 13.5 5.75 13.5H9.5C9.69891 13.5 9.88968 13.579 10.0303 13.7197C10.171 13.8603 10.25 14.0511 10.25 14.25ZM23 10.875V16.5C23 16.8978 22.842 17.2794 22.5607 17.5607C22.2794 17.842 21.8978 18 21.5 18H13.25V21C13.25 21.1989 13.171 21.3897 13.0303 21.5303C12.8897 21.671 12.6989 21.75 12.5 21.75C12.3011 21.75 12.1103 21.671 11.9697 21.5303C11.829 21.3897 11.75 21.1989 11.75 21V18H3.5C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V10.875C2.00174 9.38369 2.59493 7.95396 3.64944 6.89944C4.70396 5.84493 6.13369 5.25174 7.625 5.25H14.75V2.25C14.75 2.05109 14.829 1.86032 14.9697 1.71967C15.1103 1.57902 15.3011 1.5 15.5 1.5H18.5C18.6989 1.5 18.8897 1.57902 19.0303 1.71967C19.171 1.86032 19.25 2.05109 19.25 2.25C19.25 2.44891 19.171 2.63968 19.0303 2.78033C18.8897 2.92098 18.6989 3 18.5 3H16.25V5.25H17.375C18.8663 5.25174 20.296 5.84493 21.3506 6.89944C22.4051 7.95396 22.9983 9.38369 23 10.875ZM11.75 16.5V10.875C11.75 9.78098 11.3154 8.73177 10.5418 7.95818C9.76823 7.1846 8.71902 6.75 7.625 6.75C6.53098 6.75 5.48177 7.1846 4.70818 7.95818C3.9346 8.73177 3.5 9.78098 3.5 10.875V16.5H11.75ZM21.5 10.875C21.4988 9.78136 21.0638 8.73287 20.2904 7.95955C19.5171 7.18624 18.4686 6.75124 17.375 6.75H16.25V13.5C16.25 13.6989 16.171 13.8897 16.0303 14.0303C15.8897 14.171 15.6989 14.25 15.5 14.25C15.3011 14.25 15.1103 14.171 14.9697 14.0303C14.829 13.8897 14.75 13.6989 14.75 13.5V6.75H11.4453C12.0146 7.27571 12.4689 7.91363 12.7795 8.62357C13.0901 9.33352 13.2503 10.1001 13.25 10.875V16.5H21.5V10.875Z" fill="currentColor" />
                                </svg>
                                Open my inbox
                            </Link>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default FormCard
