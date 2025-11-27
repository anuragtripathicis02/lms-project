'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';

import MyGameLogo1 from "../../../../public/images/my-game-logo-1.png";
import MyGameLogo2 from "../../../../public/images/my-game-logo-2.png";
import MyGameLogo3 from "../../../../public/images/my-game-logo-3.png";

import GameTeamImg1 from "../../../../public/images/game-team-logo.png";


const MyGamedEliminated = () => {
  return (
    <div className='sec-my-games'>
            <div className='container'>
                <div className='section-title d-flex align-items-center gap-2 justify-content-between'>
                    <h2 className='mb-0'>My Games</h2>
                    <div className='head-action'>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Eliminated
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
                                        <div className='d-flex align-items-center'>
                                            <div className='flex-grow1'>
                                                <h4 className='red-title'>Eliminated on</h4>
                                                <p>Round 6 | 25 Oct 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Link href="" className='btn-theme btn-yellow'>Join Mid Season Comp</Link>
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
                                            <div className='flex-grow1'>
                                                <h4 className='red-title'>Eliminated on</h4>
                                                <p>Round 6 | 25 Oct 2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ms-auto'>
                                        <Link href="" className='btn-theme btn-gray'>
                                            View Details</Link>
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

export default MyGamedEliminated
