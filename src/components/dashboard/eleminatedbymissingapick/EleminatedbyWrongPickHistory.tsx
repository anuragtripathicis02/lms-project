'use client'
import Link from 'next/link'
import Image from "next/image";
import VsLogo from "../../../../public/images/vs-logo.png";

import TeamLogo1 from "../../../../public/images/team-logo-1.png";
import TeamLogo2 from "../../../../public/images/team-logo-2.png";
import TeamLogo3 from "../../../../public/images/team-logo-3.png";
import TeamLogo4 from "../../../../public/images/team-logo-4.png";
import TeamLogo5 from "../../../../public/images/team-logo-5.png";
import TeamLogo6 from "../../../../public/images/team-logo-6.png";
import TeamLogo7 from "../../../../public/images/team-logo-7.png";
import TeamLogo8 from "../../../../public/images/team-logo-8.png";
import TeamLogo9 from "../../../../public/images/team-logo-9.png";
import TeamLogo10 from "../../../../public/images/team-logo-10.png";
import TeamLogo11 from "../../../../public/images/team-logo-11.png";
import TeamLogo12 from "../../../../public/images/team-logo-12.png";
import TeamLogo13 from "../../../../public/images/team-logo-13.png";
import TeamLogo14 from "../../../../public/images/team-logo-14.png";
import TeamLogo15 from "../../../../public/images/team-logo-15.png";
import TeamLogo16 from "../../../../public/images/team-logo-16.png";
import TeamLogo17 from "../../../../public/images/team-logo-17.png";
import TeamLogo18 from "../../../../public/images/team-logo-18.png";

const EleminatedbyWrongPickHistory = () => {
  return (
    <div className='sec-history mt-36'>
        <div className='card-round-list'>
            <div className='card-round-item'>
                <div className='card-round-aside'>
                    <div className='cd-left'>
                        <h4>Round 4 | <span className='text-label txt-success'>Eliminated!</span></h4>
                    </div>
                    <div className='cd-right'>
                        <p className='m-0'>Picked on 22 Oct @02:25PM</p>
                    </div>
                </div>
                <div className='card-round-rignt'>
                        <div className='card-simple card-red'>
                            <div className='d-flex align-items-center'>
                                <div className='me-auto'>
                                    <h5 className='mb-0'>No Pick Submitted!</h5>
                                </div>
                                <div className='ms-auto'>
                                    <span className='chip-wedge'>Round Closed</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='card-round-item'>
                <div className='card-round-aside'>
                    <div className='cd-left'>
                        <h4>Round 3 | <span className='text-label txt-danger'>Survived!</span></h4>
                    </div>
                    <div className='cd-right'>
                        <p className='m-0'>Picked on 22 Oct @02:25PM</p>
                    </div>
                </div>
                <div className='card-round-rignt'>
                        <Link href="" className="match-card border-green">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo1} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo2} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight bg-green">
                                    <div className="card-sticker">Your Pick</div>
                                    <Image src={TeamLogo2} alt='' />
                                    <p className='m-0'>Adelaide Crows</p>
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
            <div className='card-round-item'>
                <div className='card-round-aside'>
                    <div className='cd-left'>
                        <h4>Round 2 | <span className='text-label txt-danger'>Survived!</span></h4>
                    </div>
                    <div className='cd-right'>
                        <p className='m-0'>Picked on 22 Oct @02:25PM</p>
                    </div>
                </div>
                <div className='card-round-rignt'>
                        <Link href="" className="match-card border-green">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo10} alt='' />
                                            <span>Hawthorn Hawks</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo11} alt='' />
                                            <span>Melbourne Demons</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight bg-green">
                                    <div className="card-sticker">Your Pick</div>
                                    <Image src={TeamLogo11} alt='' />
                                    <p className='m-0'>Hawthorn Hawks</p>
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
            <div className='card-round-item'>
                <div className='card-round-aside'>
                    <div className='cd-left'>
                        <h4>Round 1 | <span className='text-label txt-danger'>Survived!</span></h4>
                    </div>
                    <div className='cd-right'>
                        <p className='m-0'>Picked on 22 Oct @02:25PM</p>
                    </div>
                </div>
                <div className='card-round-rignt'>
                        <Link href="" className="match-card border-green">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo16} alt='' />
                                            <span>Sydney Swans</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo17} alt='' />
                                            <span>West Coast Eagles</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight bg-green">
                                    <div className="card-sticker">Your Pick</div>
                                    <Image src={TeamLogo16} alt='' />
                                    <p className='m-0'>Sydney Swans</p>
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EleminatedbyWrongPickHistory
