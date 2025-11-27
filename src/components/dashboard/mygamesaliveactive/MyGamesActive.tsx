'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';

import MyGameLogo1 from "../../../../public/images/my-game-logo-1.png";
import MyGameLogo2 from "../../../../public/images/my-game-logo-2.png";
import MyGameLogo3 from "../../../../public/images/my-game-logo-3.png";

import GameTeamImg1 from "../../../../public/images/game-team-logo.png";




const MyGamesActive = () => {
    return (
        <div className='sec-my-games'>
            <div className='container'>
                <div className='section-title d-flex align-items-center gap-2 justify-content-between'>
                    <h2 className='mb-0'>Striker Survival</h2>
                    <div className='head-action'>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Active/Alive
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </div>

                <div className='row gx-2'>
                    <div className='col-xl-6'>
                        <div className='card-game'>
                            <div className='game-header bottom-border'>
                                <div className='d-flex'>
                                    <div className='gamelogo'>
                                        <Image src={MyGameLogo1} alt='' />
                                    </div>
                                    <div className='game-content-right'>
                                        <h3>Striker Survival</h3>
                                        <ul className='d-flex align-items-center'>
                                            <li>AFL</li>
                                            <li>LMS</li>
                                            <li><b>34</b> Active Players</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='game-footer'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-auto'>
                                        <div className="status">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.246 11L24.8986 9.34738C25.0338 9.21222 25.0338 8.99303 24.8986 8.85787L24.1421 8.10139C24.007 7.96623 23.7878 7.96618 23.6526 8.10139L22 9.75401L23.246 11Z" fill="#64798A" />
                                                <path d="M23.4986 11L24.9132 9.00079C25.0289 8.83729 25.0289 8.57213 24.9132 8.40863L24.6241 8L23 10.2953L23.4986 11Z" fill="#3A556A" />
                                                <path d="M8.754 11L7.10137 9.34738C6.96621 9.21222 6.96621 8.99303 7.10137 8.85787L7.85786 8.10139C7.99301 7.96623 8.21221 7.96618 8.34737 8.10139L10 9.75401L8.754 11Z" fill="#64798A" />
                                                <path d="M8.50136 11L7.08677 9.00079C6.97108 8.83729 6.97108 8.57213 7.08677 8.40863L7.3759 8L9 10.2953L8.50136 11Z" fill="#3A556A" />
                                                <path d="M17 5H15V9H17V5Z" fill="#D5D6DB" />
                                                <path d="M16 29C22.0751 29 27 24.0751 27 18C27 11.9249 22.0751 7 16 7C9.92487 7 5 11.9249 5 18C5 24.0751 9.92487 29 16 29Z" fill="#CE412D" />
                                                <path d="M16 27C20.9706 27 25 22.9706 25 18C25 13.0294 20.9706 9 16 9C11.0294 9 7 13.0294 7 18C7 22.9706 11.0294 27 16 27Z" fill="#EBF0F3" />
                                                <path d="M13 3.59589V5.40411C13 5.73323 13.2686 6 13.6 6H18.4C18.7314 6 19 5.73323 19 5.40411V3.59589C19 3.26677 18.7314 3 18.4 3H13.6C13.2687 3 13 3.26677 13 3.59589Z" fill="#3A556A" />
                                                <path d="M18.3771 3H16V6H18.3771C18.7211 6 19 5.73317 19 5.40412V3.59588C19 3.26677 18.7211 3 18.3771 3Z" fill="#2F4859" />
                                                <path d="M10 24.4264C13.4315 27.8579 18.995 27.8579 22.4264 24.4264C25.8579 20.995 25.8579 15.4315 22.4264 12" fill="#E1E6E9" />
                                                <path d="M17 17V11.6429C17 11.2878 16.5523 11 16 11C15.4477 11 15 11.2878 15 11.6429V17H17Z" fill="#2F4859" />
                                                <path d="M16 20C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18C14 19.1046 14.8954 20 16 20Z" fill="#3A556A" />
                                            </svg>
                                            <strong>Round 6</strong> Closing in: <strong> 5D : 14H : 22M</strong></div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Link href="" className='btn-theme btn-yellow'>Make a Pick</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='card-game'>
                            <div className='game-header bottom-border'>
                                <div className='d-flex'>
                                    <div className='gamelogo'>
                                        <Image src={MyGameLogo2} alt='' />
                                    </div>
                                    <div className='game-content-right'>
                                        <h3>NRL Season 2026</h3>
                                        <ul className='d-flex align-items-center'>
                                            <li>AFL</li>
                                            <li>LMS</li>
                                            <li><b>34</b> Active Players</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='game-footer'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-auto'>
                                        <div className='d-flex align-items-center'>
                                            <Image src={GameTeamImg1} alt='' />
                                            <div className='flex-grow1'>
                                                <h4>Round 6</h4>
                                                <p>North Melbourne Kangaroos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Link href="" className='btn-theme btn-yellow'>Make a Pick</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='card-game'>
                            <div className='game-header bottom-border'>
                                <div className='d-flex'>
                                    <div className='gamelogo'>
                                        <Image src={MyGameLogo3} alt='' />
                                    </div>
                                    <div className='game-content-right'>
                                        <h3>AFL Season 2026</h3>
                                        <ul className='d-flex align-items-center'>
                                            <li>AFL</li>
                                            <li>LMS</li>
                                            <li><b>34</b> Active Players</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='game-footer'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-auto'>
                                        <div className='d-flex align-items-center'>
                                            <Image src={GameTeamImg1} alt='' />
                                            <div className='flex-grow1'>
                                                <h4>Your Pick for Round 6</h4>
                                                <p>North Melbourne Kangaroos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Link href="" className='btn-theme btn-gray'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M13 4.75H11.25V3.5C11.25 2.63805 10.9076 1.8114 10.2981 1.2019C9.6886 0.59241 8.86195 0.25 8 0.25C7.13805 0.25 6.3114 0.59241 5.7019 1.2019C5.09241 1.8114 4.75 2.63805 4.75 3.5V4.75H3C2.66848 4.75 2.35054 4.8817 2.11612 5.11612C1.8817 5.35054 1.75 5.66848 1.75 6V13C1.75 13.3315 1.8817 13.6495 2.11612 13.8839C2.35054 14.1183 2.66848 14.25 3 14.25H13C13.3315 14.25 13.6495 14.1183 13.8839 13.8839C14.1183 13.6495 14.25 13.3315 14.25 13V6C14.25 5.66848 14.1183 5.35054 13.8839 5.11612C13.6495 4.8817 13.3315 4.75 13 4.75ZM6.25 3.5C6.25 3.03587 6.43437 2.59075 6.76256 2.26256C7.09075 1.93437 7.53587 1.75 8 1.75C8.46413 1.75 8.90925 1.93437 9.23744 2.26256C9.56563 2.59075 9.75 3.03587 9.75 3.5V4.75H6.25V3.5ZM12.75 12.75H3.25V6.25H12.75V12.75ZM9 9.5C9 9.69778 8.94135 9.89112 8.83147 10.0556C8.72159 10.22 8.56541 10.3482 8.38268 10.4239C8.19996 10.4996 7.99889 10.5194 7.80491 10.4808C7.61093 10.4422 7.43275 10.347 7.29289 10.2071C7.15304 10.0673 7.0578 9.88907 7.01921 9.69509C6.98063 9.50111 7.00043 9.30004 7.07612 9.11732C7.15181 8.93459 7.27998 8.77841 7.44443 8.66853C7.60888 8.55865 7.80222 8.5 8 8.5C8.26522 8.5 8.51957 8.60536 8.70711 8.79289C8.89464 8.98043 9 9.23478 9 9.5Z" fill="currentColor" />
                                            </svg>

                                            Locked</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyGamesActive
