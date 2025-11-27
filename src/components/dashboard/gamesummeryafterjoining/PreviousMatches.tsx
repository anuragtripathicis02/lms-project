'use client'
import Link from 'next/link'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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


const PreviousMatches = () => {
    return (
        <div className="team-slider previous-match-slider">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <div className='match-title text-center'>
                        <h2>Round 5</h2>
                    </div>
                    <div className='match-grid d-flex'>
                        <Link href="" className="match-card">
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
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo2} alt='' />
                                    <p className='m-0'>Adelaide Crows</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo3} alt='' />
                                            <span>Carlton Blues</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo4} alt='' />
                                            <span>Collingwood Magpies</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo3} alt='' />
                                    <p className='m-0'>Carlton Blues</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo5} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo6} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo5} alt='' />
                                    <p className='m-0'>Fremantle Dockers</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo7} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo8} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <div className='card-sticker'>Your Pick</div>
                                    <Image src={TeamLogo7} alt='' />
                                    <p className='m-0'>Geelong Cats</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo9} alt='' />
                                            <span>GWS Giants</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo10} alt='' />
                                            <span>Hawthorn Hawks</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo9} alt='' />
                                    <p className='m-0'>Hawthorn Hawks</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo11} alt='' />
                                            <span>Melbourne Demons</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo12} alt='' />
                                            <span>North Melbourne KangaroosKangaroo</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo11} alt='' />
                                    <p className='m-0'>Melbourne Demons</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo13} alt='' />
                                            <span>Port Adelaide Power</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo14} alt='' />
                                            <span>Richmond Tigers</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo13} alt='' />
                                    <p className='m-0'>Hawthorn Hawks</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo15} alt='' />
                                            <span>St Kilda Saints</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo16} alt='' />
                                            <span>Sydney Swans</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo16} alt='' />
                                    <p className='m-0'>Sydney Swans</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo17} alt='' />
                                            <span>West Coast Eagles</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo18} alt='' />
                                            <span>Western Bulldogs</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo17} alt='' />
                                    <p className='m-0'>West Coast Eagles</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='match-title text-center'>
                        <h2>Round 5</h2>
                    </div>
                    <div className='match-grid d-flex'>
                        <Link href="" className="match-card">
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
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo2} alt='' />
                                    <p className='m-0'>Adelaide Crows</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo3} alt='' />
                                            <span>Carlton Blues</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo4} alt='' />
                                            <span>Collingwood Magpies</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo3} alt='' />
                                    <p className='m-0'>Carlton Blues</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo5} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo6} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo5} alt='' />
                                    <p className='m-0'>Fremantle Dockers</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo7} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo8} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <div className='card-sticker'>Your Pick</div>
                                    <Image src={TeamLogo7} alt='' />
                                    <p className='m-0'>Geelong Cats</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo9} alt='' />
                                            <span>GWS Giants</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo10} alt='' />
                                            <span>Hawthorn Hawks</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo9} alt='' />
                                    <p className='m-0'>Hawthorn Hawks</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo11} alt='' />
                                            <span>Melbourne Demons</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo12} alt='' />
                                            <span>North Melbourne KangaroosKangaroo</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo11} alt='' />
                                    <p className='m-0'>Melbourne Demons</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo13} alt='' />
                                            <span>Port Adelaide Power</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo14} alt='' />
                                            <span>Richmond Tigers</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo13} alt='' />
                                    <p className='m-0'>Hawthorn Hawks</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo15} alt='' />
                                            <span>St Kilda Saints</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo16} alt='' />
                                            <span>Sydney Swans</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo16} alt='' />
                                    <p className='m-0'>Sydney Swans</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="" className="match-card">
                            <div className='d-flex gap-pre-match-20 align-items-stretch'>
                                <div className="teams d-flex flex-column flex-grow-1">
                                    <div className='d-flex align-items-center ps-0'>
                                        <div className="team">
                                            <Image src={TeamLogo17} alt='' />
                                            <span>West Coast Eagles</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo18} alt='' />
                                            <span>Western Bulldogs</span>
                                        </div>
                                    </div>
                                    <div className="match-info mt-auto">
                                        <div className="date-info"><b>25</b> OCT</div>
                                        <div className="time-info">19:30 to 21:13</div>
                                    </div>
                                </div>
                                <div className="match-winner highlight">
                                    <Image src={TeamLogo17} alt='' />
                                    <p className='m-0'>West Coast Eagles</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default PreviousMatches
