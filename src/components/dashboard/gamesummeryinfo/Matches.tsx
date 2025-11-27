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
import GameInfo from './GameInfo';

const Matches = () => {
    return (
        <div className="team-slider game-summery-matches-slider">
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
                        <h2>Round 1</h2>
                    </div>
                    <div className='match-grid d-flex'>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo3} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo4} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo9} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo10} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo11} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo12} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo13} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo14} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                         <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo15} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo16} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo17} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo18} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='match-title text-center'>
                        <h2>Round 1</h2>
                    </div>
                    <div className='match-grid d-flex'>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo3} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo4} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
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
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo9} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo10} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo11} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo12} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo13} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo14} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                         <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo15} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo16} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href="" className="match-card">
                            <div className='d-flex'>
                                <div className="date-box">
                                    <div className='date-box-wrapper'>
                                        <span className="day">25</span>
                                        <span className="month">OCT</span>
                                    </div>
                                    <div className="time">19:30</div>
                                </div>
                                <div className="teams flex-grow-1">
                                    <div className='d-flex align-items-center'>
                                        <div className="team">
                                            <Image src={TeamLogo17} alt='' />
                                            <span>Brisbane Lions</span>
                                        </div>
                                        <div className="vs">
                                            <Image src={VsLogo} alt='' />
                                        </div>
                                        <div className="team">
                                            <Image src={TeamLogo18} alt='' />
                                            <span>Adelaide Crows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Matches
