"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";

import Vs from "../../../public/images/team-vs-logo.png";
import Crown from "../../../public/images/crown.png";
import AnnouncementsWhiteBg from "../../../public/images/announcements-bg-white.png";
import AnnouncementsBlackBg from "../../../public/images/announcements-bg-black.png";
import TeamLogo1 from "../../../public/images/team-logo-1.png";
import TeamLogo2 from "../../../public/images/team-logo-2.png";

import RollingDrumWhiteBg from "../../../public/images/rolling-bg-white.png";
import RollingDrumBlackeBg from "../../../public/images/rolling-bg-black.png";

import CongratsWhiteBg from "../../../public/images/congrats-bg-white.png";
import CongratsBlackBg from "../../../public/images/congrats-bg-black.png";


import Link from "next/link";

const RollingDrums = ({ showRollingDrum, handleCloseAll }: any) => {
    const [fadeStage, setFadeStage] = useState<"clear" | "fading" | "hidden">("clear");
    const [showSurvived, setShowSurvived] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);

    useEffect(() => {
        if (showRollingDrum) {
            // Reset all states when modal opens
            setFadeStage("clear");
            setShowSurvived(false);
            setShowGameOver(false);

            const fade1 = setTimeout(() => setFadeStage("fading"), 2000);
            const fade2 = setTimeout(() => setFadeStage("hidden"), 4000);

            // const fade1 = setTimeout(() => setFadeStage("fading"), 2000);
            // const fade2 = setTimeout(() => setFadeStage("hidden"), 4000);

            const resultTimer = setTimeout(() => {
                const isWinner = false; // set false to test loser modal
                if (isWinner) setShowSurvived(true);
                else setShowGameOver(true);
            }, 4000);

            return () => {
                clearTimeout(fade1);
                clearTimeout(fade2);
                clearTimeout(resultTimer);
            };
        }
    }, [showRollingDrum]);

    // Hide match-container when result modals show
    const hideMatchContainer = showSurvived || showGameOver;

    return (
        <>
            {/* 1️⃣ Rolling Drum Modal */}
            <Modal
                size="sm"
                show={showRollingDrum}
                onHide={handleCloseAll}
                centered
                className={`common-modal-sec report-modal-classify w-500 pt-4 
    ${showSurvived ? "survived" : ""} 
    ${showGameOver ? "game-over" : ""}`}
            >

                <Button variant="link" className="btn-close-btn" onClick={handleCloseAll}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                    </svg>
                </Button>
                <Modal.Body className="common-modal-body announcements-modal text-center">



                    <div className="announcements-modal-content">
                        {!hideMatchContainer && (
                            <div className={`match-container fade-stage-${fadeStage}`}>
                                <div className="position-relative z-1">
                                    <div className="d-flex align-items-center mb-24">
                                        <div className="rolling-team position-relative team-left team-winner">
                                            <Image src={TeamLogo1} alt="" />
                                            <p className="m-0">Brisbane Lions</p>
                                        </div>
                                        <div className="team-vs-logo">
                                            <Image src={Vs} alt="" />
                                        </div>
                                        <div className="rolling-team position-relative team-right team-loser">
                                            <Image src={TeamLogo2} alt="" />
                                            <p className="m-0">Adelaide Crows</p>
                                            <span className="pick">Your Pick</span>
                                        </div>
                                    </div>
                                    <h2 className="m-0">Rolling Drums...</h2>
                                </div>
                                <div className="announcements-bg-main">
                                    <Image src={RollingDrumWhiteBg} className="img-theme-white" alt="" />
                                    <Image src={RollingDrumBlackeBg} className="img-theme-black" alt="" />
                                </div>
                            </div>
                        )}

                        {showSurvived && (
                            <div className="if-survaived">
                                <div className="position-relative z-1">
                                    <div className="logo-box">
                                        <div className="icon-crown">
                                            <Image src={Crown} alt="" />
                                        </div>
                                        <Image src={TeamLogo1} alt="" />
                                        <p className="m-0">Brisbane Lions</p>
                                        <span className="pick">Your Pick</span>
                                    </div>

                                    <h2>Congrats...</h2>
                                    <p className="mb-40">Your pick won! uou have survived Round 6 of  “AFL Season 2026”</p>

                                    <Link href="" className="link-underline-text mb-40 d-block">View Summery</Link>
                                    <button className="btn-theme btn-black w-100">Make Next Pick</button>
                                </div>
                                <div className="announcements-bg-main">
                                    <Image src={CongratsWhiteBg} className="img-theme-white" alt="" />
                                    <Image src={CongratsBlackBg} className="img-theme-black" alt="" />
                                </div>

                            </div>
                        )}

                        {showGameOver && (
                            <div className="game-over">
                                <div className="position-relative z-1">
                                <div className="logo-box">
                                    <div className="icon-crown">
                                        <Image src={Crown} alt="" />
                                    </div>
                                    <Image src={TeamLogo1} alt="" />
                                    <p className="m-0">Brisbane Lions</p>
                                    <span className="pick">Winner Team</span>
                                </div>

                                <h2 className="red-title">You Are Out...</h2>
                                <p className="mb-40">Your pick didn’t win! you are eliminated for Round 6 of  “AFL Season 2026”</p>

                                <Link href="" className="link-underline-text mb-40 d-block">View Summery</Link>
                                <button className="btn-theme btn-yellow w-100">Join Mid Season Comp</button>
</div>
                                <div className='announcements-bg-main'>
                    <Image src={AnnouncementsWhiteBg} className='img-theme-white' alt=''/>    
                    <Image src={AnnouncementsBlackBg} className='img-theme-black' alt=''/>
                </div>
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default RollingDrums;
