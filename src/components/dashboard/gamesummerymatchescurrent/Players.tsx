'use client'
import Link from 'next/link'
import Image from "next/image";

import PlayerImg1 from "../../../../public/images/player-img-1.png";
import PlayerImg2 from "../../../../public/images/player-img-2.png";
import PlayerImg3 from "../../../../public/images/player-img-3.png";
import PlayerImg4 from "../../../../public/images/player-img-4.png";

import TeamLogo1 from "../../../../public/images/player-team-logo-1.png";
import TeamLogo2 from "../../../../public/images/player-team-logo-2.png";
import TeamLogo3 from "../../../../public/images/player-team-logo-3.png";
import TeamLogo4 from "../../../../public/images/player-team-logo-4.png";
import TeamLogo5 from "../../../../public/images/player-team-logo-5.png";


import EliminatedImg1 from "../../../../public/images/eliminated-img-1.png";
import EliminatedImg2 from "../../../../public/images/eliminated-img-2.png";
import EliminatedImg3 from "../../../../public/images/eliminated-img-3.png";
import EliminatedImg4 from "../../../../public/images/eliminated-img-4.png";
import EliminatedImg5 from "../../../../public/images/eliminated-img-5.png";
import EliminatedImg6 from "../../../../public/images/eliminated-img-6.png";
import EliminatedImg7 from "../../../../public/images/eliminated-img-7.png";


const Players = () => {
    return (
        <>
            <div className='players-section mt-36'>
                <h3 className='player-title'>Alive (4)</h3>
                <div className='player-list alive mb-32'>
                    <div className='player-card'>
                        <div className='playerImg'>
                            <Image src={PlayerImg1} alt='' />
                        </div>
                        <div className='player-info'>
                            <h4>johnd123 (You)</h4>
                            <p>Survived : 5R</p>
                        </div>
                        <div className='team-logos'>
                            <Image src={TeamLogo1} alt='' />
                            <Image src={TeamLogo2} alt='' />
                            <Image src={TeamLogo3} alt='' />
                        </div>
                    </div>
                    <div className='player-card'>
                        <div className='playerImg'>
                            <Image src={PlayerImg2} alt='' />
                        </div>
                        <div className='player-info'>
                            <h4>david232</h4>
                            <p>Survived : 5R</p>
                        </div>
                        <div className='team-logos'>
                            <Image src={TeamLogo4} alt='' />
                            <Image src={TeamLogo5} alt='' />
                            <span className='tema-logo-thumb'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4.9974 8.66602C3.71268 8.66602 2.66406 9.71464 2.66406 10.9993C2.66406 12.2841 3.71268 13.3327 4.9974 13.3327C6.16888 13.3327 7.14319 12.4605 7.30599 11.3327H8.6888C8.8516 12.4605 9.82592 13.3327 10.9974 13.3327C12.2821 13.3327 13.3307 12.2841 13.3307 10.9993C13.3307 9.71464 12.2821 8.66602 10.9974 8.66602C9.82592 8.66602 8.8516 9.53824 8.6888 10.666H7.30599C7.14319 9.53824 6.16888 8.66602 4.9974 8.66602ZM4.9974 9.33268C5.92182 9.33268 6.66406 10.0749 6.66406 10.9993C6.66406 11.9238 5.92182 12.666 4.9974 12.666C4.07297 12.666 3.33073 11.9238 3.33073 10.9993C3.33073 10.0749 4.07297 9.33268 4.9974 9.33268ZM10.9974 9.33268C11.9218 9.33268 12.6641 10.0749 12.6641 10.9993C12.6641 11.9238 11.9218 12.666 10.9974 12.666C10.073 12.666 9.33073 11.9238 9.33073 10.9993C9.33073 10.0749 10.073 9.33268 10.9974 9.33268Z" fill="currentColor" />
                                    <path d="M5.16016 2.66612C4.49257 2.6583 3.86847 3.10209 3.6875 3.782L2.74349 7.33278H1.66536C1.48127 7.33278 1.33203 7.48202 1.33203 7.66612C1.33203 7.85021 1.48127 7.99945 1.66536 7.99945H14.332C14.5161 7.99945 14.6654 7.85021 14.6654 7.66612C14.6654 7.48202 14.5161 7.33278 14.332 7.33278H13.2539L12.3099 3.782C12.0872 2.94518 11.1919 2.46695 10.3724 2.74685L8.10677 3.52028C8.03679 3.54419 7.9606 3.54419 7.89062 3.52028L5.625 2.74685C5.47135 2.69437 5.31421 2.66792 5.16016 2.66612ZM5.14974 3.33018C5.23584 3.33167 5.32332 3.3474 5.41016 3.37705L7.67578 4.15049C7.88536 4.22208 8.11203 4.22208 8.32161 4.15049L10.5872 3.37705C11.0504 3.21888 11.5395 3.48096 11.6654 3.95388L12.5651 7.33278H3.43229L4.33203 3.95388C4.4343 3.56963 4.77663 3.32374 5.14974 3.33018Z" fill="currentColor" />
                                </svg>

                            </span>
                        </div>
                    </div>
                    <div className='player-card'>
                        <div className='playerImg'>
                            <Image src={PlayerImg3} alt='' />
                        </div>
                        <div className='player-info'>
                            <h4>johnd123 (You)</h4>
                            <p>Survived : 5R</p>
                        </div>
                        <div className='team-logos'>
                            <Image src={TeamLogo2} alt='' />
                            <Image src={TeamLogo3} alt='' />
                        </div>
                    </div>
                    <div className='player-card'>
                        <div className='playerImg'>
                            <Image src={PlayerImg4} alt='' />
                        </div>
                        <div className='player-info'>
                            <h4>david232 (You)</h4>
                            <p>Survived : 5R</p>
                        </div>
                        <div className='team-logos'>
                            <Image src={TeamLogo4} alt='' />
                            <Image src={TeamLogo5} alt='' />
                            <span className='tema-logo-thumb'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4.9974 8.66602C3.71268 8.66602 2.66406 9.71464 2.66406 10.9993C2.66406 12.2841 3.71268 13.3327 4.9974 13.3327C6.16888 13.3327 7.14319 12.4605 7.30599 11.3327H8.6888C8.8516 12.4605 9.82592 13.3327 10.9974 13.3327C12.2821 13.3327 13.3307 12.2841 13.3307 10.9993C13.3307 9.71464 12.2821 8.66602 10.9974 8.66602C9.82592 8.66602 8.8516 9.53824 8.6888 10.666H7.30599C7.14319 9.53824 6.16888 8.66602 4.9974 8.66602ZM4.9974 9.33268C5.92182 9.33268 6.66406 10.0749 6.66406 10.9993C6.66406 11.9238 5.92182 12.666 4.9974 12.666C4.07297 12.666 3.33073 11.9238 3.33073 10.9993C3.33073 10.0749 4.07297 9.33268 4.9974 9.33268ZM10.9974 9.33268C11.9218 9.33268 12.6641 10.0749 12.6641 10.9993C12.6641 11.9238 11.9218 12.666 10.9974 12.666C10.073 12.666 9.33073 11.9238 9.33073 10.9993C9.33073 10.0749 10.073 9.33268 10.9974 9.33268Z" fill="currentColor" />
                                    <path d="M5.16016 2.66612C4.49257 2.6583 3.86847 3.10209 3.6875 3.782L2.74349 7.33278H1.66536C1.48127 7.33278 1.33203 7.48202 1.33203 7.66612C1.33203 7.85021 1.48127 7.99945 1.66536 7.99945H14.332C14.5161 7.99945 14.6654 7.85021 14.6654 7.66612C14.6654 7.48202 14.5161 7.33278 14.332 7.33278H13.2539L12.3099 3.782C12.0872 2.94518 11.1919 2.46695 10.3724 2.74685L8.10677 3.52028C8.03679 3.54419 7.9606 3.54419 7.89062 3.52028L5.625 2.74685C5.47135 2.69437 5.31421 2.66792 5.16016 2.66612ZM5.14974 3.33018C5.23584 3.33167 5.32332 3.3474 5.41016 3.37705L7.67578 4.15049C7.88536 4.22208 8.11203 4.22208 8.32161 4.15049L10.5872 3.37705C11.0504 3.21888 11.5395 3.48096 11.6654 3.95388L12.5651 7.33278H3.43229L4.33203 3.95388C4.4343 3.56963 4.77663 3.32374 5.14974 3.33018Z" fill="currentColor" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sec-eliminated'>
                <h3 className='player-title'>Eliminated (53)</h3>
                <div className='grid-player-list'>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg1} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg2} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg3} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg4} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg5} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='player-list-eliminated'>
                        <div className='d-flex eliminated-wrapper'>
                            <div className='playerImg-eliminated'>
                                <Image src={EliminatedImg6} alt='' />
                            </div>
                            <div className='player-info-detail d-flex'>
                                <div className='me-auto'>
                                    <h4>david232</h4>
                                    <p className='mb-0'>Eliminated on 22-10-2025</p>
                                </div>
                                <div className='ms-auto'>
                                    <h4>4R</h4>
                                    <p className='mb-0'>Survived</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Players
