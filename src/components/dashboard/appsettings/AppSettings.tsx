'use client'
import SetTimeZoneModal from '@/components/modalcomponents/SetTimeZoneModal'
import TwoFactorAuthenticationModal from '@/components/modalcomponents/TwoFactorAuthenticationModal'
import Link from 'next/link'
import React, { useState } from 'react'

import { useTheme } from "@/app/ThemeProvider";
import ThemeToggle from '@/app/ThemeToggle'

const AppSettings = () => {

    const [showLogin, setShowLogin] = useState(false);
    const handleLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    const [showTwoFactorAuthen, setShowTwoFactorAuthen] = useState(false);
    const handleTwoFactorAuthen = () => setShowTwoFactorAuthen(true);
    const handleCloseTwoFactorAuthen = () => setShowTwoFactorAuthen(false);

    const { theme, toggleTheme } = useTheme();


return (
    <div className='body-content-sec p-40'>
        <div className='container'>
            <h2 className='mb-4'>App Settings</h2>
            <div className='setting-card mb-32'>
                <div className='setting-card-title mb-3'>Notification Setup</div>
                <div className='setting-card-bg'>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Push Notification</h5>
                            <p className='m-0'>Enable push alerts for real-time updates on your mobile device.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>SMS Notification</h5>
                            <p className='m-0'>On the move? Turn on SMS alerts for quick, essential updates.</p>
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
                            <h5>Email Notification</h5>
                            <p className='m-0'>Get curated updates and betting insights delivered straight to your inbox.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='setting-card mb-32'>
                <div className='setting-card-title mb-3'>Financial Setup</div>
                <div className='setting-card-bg'>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Responsible Pay</h5>
                            <p className='m-0'>Enable responsible pay to set limit for your daily weekly or monthly deposit.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch">
                                <input type="checkbox" checked />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5 className='m-0'>Daily Limit</h5>

                        </div>
                        <div className='ml-auto'>
                            <span className='ampunt-text'>$500</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='setting-card mb-32'>
                <div className='setting-card-title mb-3'>User Preferences</div>
                <div className='setting-card-bg'>
                    <Link href="javascript:void(0)" onClick={handleLogin} className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Time Zone</h5>
                            <p className='m-0'>Australia | Adelaide (GMT+10:30)</p>
                        </div>
                        <div className='ml-auto'>
                            <span className='arrow-right'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                    <Link href="javascript:void(0)" className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Preferred Language</h5>
                            <p className='m-0'>English(AU)</p>
                        </div>
                        <div className='ml-auto'>
                            <span className='arrow-right'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Dark Mode</h5>
                            <p className='m-0'>Enable to switch to dark mode, more eye comforting and battery saving.</p>
                        </div>
                        <div className='ml-auto'>
                            <ThemeToggle/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='setting-card mb-32'>
                <div className='setting-card-title mb-3'>Account Setting</div>
                <div className='setting-card-bg'>
                    <div className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5>Two Factor Authentication</h5>
                            <p className='m-0'>Secure your account by an additional layer on protection.</p>
                        </div>
                        <div className='ml-auto'>
                            <label className="switch" onClick={handleTwoFactorAuthen}>
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <Link href="javascript:void(0)" className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5 className='m-0'>Change Password</h5>
                        </div>
                        <div className='ml-auto'>
                            <span className='arrow-right'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>

                        </div>
                    </Link>
                    <Link href="javascript:void(0)" className='setting-item d-flex align-items-center'>
                        <div className='me-auto'>
                            <h5 className='m-0'>Take a Break</h5>
                        </div>
                        <div className='ml-auto'>
                            <span className='arrow-right'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 4.5L16.5 12L9 19.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </Link>

                    <div className='setting-item d-flex align-items-center deactivate-account'>
                        <div className='me-auto'>
                            <h5 className='m-0'>Deactivate Account</h5>
                        </div>
                        <div className='ml-auto'>
                            <Link href="">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#B52323" />
                                </svg>


                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SetTimeZoneModal show={showLogin} handleClose={handleCloseLogin} />
        <TwoFactorAuthenticationModal show={showTwoFactorAuthen} handleClose={handleCloseTwoFactorAuthen} />

    </div>
)

}

export default AppSettings
