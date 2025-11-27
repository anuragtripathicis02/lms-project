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
import ConfirmYourPick from '@/components/modalcomponents/ConfirmYourPick';
import { useState } from 'react';
import SwitchYourPick from '@/components/modalcomponents/SwitchYourPick';

const CurrentMatches = () => {

    const [showConformyourpick, setShowConformyourpick] = useState(false);
const handleConformyourpick = () => {
  setShowConformyourpick(true);
};

const [showSwitchyourpicks, setShowSwitchyourpicks] = useState(false);
const handleSwitchyourpicks = () => {
  setShowSwitchyourpicks(true);
};

// ✅ Single function to close all modals
const handleCloseAll = () => {
  setShowConformyourpick(false);
  setShowSwitchyourpicks(false);
};


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
                        <h2>Round 6</h2>
                    </div>
                    <div className='current-match-grid'>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box active' onClick={handleConformyourpick}>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo1} alt='' />
                                        <p className='mb-0'>Brisbane Lions</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box' onClick={handleSwitchyourpicks}>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo2} alt='' />
                                        <p className='mb-0'>Adelaide Crows</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo3} alt='' />
                                        <p className='mb-0'>Carlton Blues</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo4} alt='' />
                                        <p className='mb-0'>Collingwood Magpies</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo5} alt='' />
                                        <p className='mb-0'>Essendon Bombers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo6} alt='' />
                                        <p className='mb-0'>Fremantle Dockers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo7} alt='' />
                                        <p className='mb-0'>Geelong Cats</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo8} alt='' />
                                        <p className='mb-0'>Gold Coast Suns</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo9} alt='' />
                                        <p className='mb-0'>GWS Giants</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo10} alt='' />
                                        <p className='mb-0'>Hawthorn Hawks</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo11} alt='' />
                                        <p className='mb-0'>Melbourne Demons</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo12} alt='' />
                                        <p className='mb-0'>North Melbourne KangaroosKangaroo</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo13} alt='' />
                                        <p className='mb-0'>Port Adelaide Power</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo14} alt='' />
                                        <p className='mb-0'>Richmond Tigers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo15} alt='' />
                                        <p className='mb-0'>St Kilda Saints</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo16} alt='' />
                                        <p className='mb-0'>Sydney Swans</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo17} alt='' />
                                        <p className='mb-0'>West Coast Eagles</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo18} alt='' />
                                        <p className='mb-0'>Western Bulldogs</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='match-title text-center'>
                        <h2>Round 6</h2>
                    </div>
                    <div className='current-match-grid'>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box active' onClick={handleConformyourpick}>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo1} alt='' />
                                        <p className='mb-0'>Brisbane Lions</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box' onClick={handleSwitchyourpicks}>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo2} alt='' />
                                        <p className='mb-0'>Adelaide Crows</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo3} alt='' />
                                        <p className='mb-0'>Carlton Blues</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo4} alt='' />
                                        <p className='mb-0'>Collingwood Magpies</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo5} alt='' />
                                        <p className='mb-0'>Essendon Bombers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo6} alt='' />
                                        <p className='mb-0'>Fremantle Dockers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo7} alt='' />
                                        <p className='mb-0'>Geelong Cats</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo8} alt='' />
                                        <p className='mb-0'>Gold Coast Suns</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo9} alt='' />
                                        <p className='mb-0'>GWS Giants</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo10} alt='' />
                                        <p className='mb-0'>Hawthorn Hawks</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo11} alt='' />
                                        <p className='mb-0'>Melbourne Demons</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo12} alt='' />
                                        <p className='mb-0'>North Melbourne KangaroosKangaroo</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo13} alt='' />
                                        <p className='mb-0'>Port Adelaide Power</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo14} alt='' />
                                        <p className='mb-0'>Richmond Tigers</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo15} alt='' />
                                        <p className='mb-0'>St Kilda Saints</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo16} alt='' />
                                        <p className='mb-0'>Sydney Swans</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='current-match-card'>
                            <div className='match-card-white'>
                                <div className='current-match-side-label'>
                                    <div className='date-label'><b>25</b> Oct </div>
                                    <div className='time-label'>19:30</div>
                                </div>
                                <div className='current-match-inner'>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo17} alt='' />
                                        <p className='mb-0'>West Coast Eagles</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                    <div className='vs'>
                                        <Image src={VsLogo} alt='' />
                                    </div>
                                    <div className='current-team-box'>
                                        <div className="match-radio">
                                            <span>&nbsp;</span>
                                        </div>
                                        <Image src={TeamLogo18} alt='' />
                                        <p className='mb-0'>Western Bulldogs</p>
                                        <div className='indicators'>
                                            <div className='dot green-dot'></div>
                                            <div className='dot red-dot'></div>
                                            <div className='dot gray-dot'></div>
                                            <div className='dot green-dot'></div>
                                            <div className='dot green-dot'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <ConfirmYourPick show={showConformyourpick} handleClose={handleCloseAll} />
            <SwitchYourPick show={showSwitchyourpicks} handleClose={handleCloseAll} />
        </div>
    )
}

export default CurrentMatches
