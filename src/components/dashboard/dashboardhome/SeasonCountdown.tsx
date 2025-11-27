'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CountdownCard from './CountdownCard';


const SeasonCountdown = () => {
    return (
        <>
            <div className="slider-countdown">
                <div className='section-title d-flex align-items-center gap-2 justify-content-between'>
                    <h2 className='mb-0'>Reminders</h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 16,
                        },
                        400: {
                            slidesPerView: 1.2,
                            spaceBetween: 16,
                        },
                        550: {
                            slidesPerView: 1.4,
                            spaceBetween: 16,
                        },

                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: 24,
                        },
                        850: {
                            slidesPerView: 2.3,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 2.8,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="slide-countdown">
                            <CountdownCard
                                title="AFL Season 2026"
                                subtitle="Round 6 Closes In"
                                endDate="2025-12-10T00:00:00"
                                color="#f9b4b4"
                                className="countdown-card-pink"
                            />
                            <button className='btn-theme btn-yellow font-16'>Make a Pick</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-countdown">
                            <CountdownCard
                                title="NRL Season 2026"
                                subtitle="Round 6 Closes In"
                                endDate="2025-12-10T00:00:00"
                                color="#b4d2f9"
                                className="countdown-card-blue"
                            />
                            <button className='btn-theme btn-yellow font-16'>Make a Pick</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-countdown">
                            <CountdownCard
                                title="NRL Season 2026"
                                subtitle="Round 6 Closes In"
                                endDate="2025-12-10T00:00:00"
                                color="#b4f9c4"
                                className="countdown-card-green"
                            />
                            <button className='btn-theme btn-yellow font-16'>Make a Pick</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default SeasonCountdown
