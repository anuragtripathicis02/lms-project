"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SlideScreen1 from "../../../public/images/intor-slide-1.png";
import SlideScreen2 from "../../../public/images/intor-slide-2.png";
import SlideScreen3 from "../../../public/images/intor-slide-3.png";

import SlideScreenBlack1 from "../../../public/images/intro-slide-black-1.png";
import SlideScreenBlack2 from "../../../public/images/intor-slide-black-2.png";
import SlideScreenBlack3 from "../../../public/images/intor-slide-black-3.png";



const IntroModal = ({ show, handleClose }: any) => {
    const swiperRef = useRef<any>(null);

    const goNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            centered
            className="common-modal-sec report-modal-classify w-500 pt-4"
        >
            {/* Close Button */}
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>

            </Button>

            {/* Modal Body with Swiper */}
            <Modal.Body className="common-modal-body text-center" style={{ position: "relative" }}>
                <div className="modal-slider">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    //   loop
                    //   navigation
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination", // single container for all slides
                    }}
                >
                    {/* Slide 1 */}
                    <SwiperSlide className="card-slide text-start">
                            <div className="mb-40">
                                <Image src={SlideScreen1} alt="Slide 1" className="img-theme-white" />
                                <Image src={SlideScreenBlack1} alt="Slide 1" className="img-theme-black" />

                            </div>
                            <h2>Pick one team per <br></br> round...</h2>
                            <p className="mb-40">
                                Choose one team each round. If your team wins, you move on to the next round. If they lose or draw, you're out of the game.
                            </p>
                            <div className="custom-next btn-theme btn-yellow w-100" onClick={goNext}>
                                Next
                            </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="card-slide text-start">
                        
                            <div className="mb-40">
                                <Image src={SlideScreen2} alt="Slide 1" className="img-theme-white" />
                                <Image src={SlideScreenBlack2} alt="Slide 1" className="img-theme-black" />
                            </div>
                            <h2>Plan your picks <br></br> wisely...</h2>
                            <p className="mb-40">You can’t choose the same team again for the next 5 rounds. So strategize carefully and play smart to stay in the game.</p>
                            <div className="custom-next btn-theme btn-yellow w-100" onClick={goNext}>
                                Next
                            </div>
                        
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide className="card-slide text-start">
                        
                            <div className="mb-40">
                                <Image src={SlideScreen3} alt="Slide 1" className="img-theme-white" />
                                <Image src={SlideScreenBlack3} alt="Slide 1" className="img-theme-black" />
                            </div>
                            <h2>Miss a pick and <br></br>
                                you’re out.</h2>
                            <p className="mb-40">If you forget to make your pick before the round closes, you’ll be eliminated from the game. Don’t miss your chance—every round counts!</p>
                            <Link href="" target="_blank" className="custom-next btn-theme btn-yellow w-100">
                                Join the Game
                            </Link>
                        
                    </SwiperSlide>

                    {/* Pagination container (single, works for all slides) */}
                    <div className="custom-pagination"></div>
                </Swiper>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default IntroModal;
