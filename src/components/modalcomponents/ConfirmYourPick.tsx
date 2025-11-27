"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';


import TeamLogo1 from "../../../public/images/team-logo-1.png";

const ConfirmYourPick = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal-sec report-modal-classify w-500 pt-4">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>

            </Button>

            <Modal.Body className="common-modal-body">
                <h2>Confirm your pick</h2>
                <p className='mb-24 pb-2'>Please confirm you are picking the team mentioned bellow</p>

                <div className='bank-list mb-40'>
                    <div className='bank-info-card'>
                        <div className='d-flex align-items-center'>
                            <div className='icon'>
                                <Image src={TeamLogo1} alt='' />
                            </div>
                            <div className='content-right'>
                                <h4 className="bank-name">Brisbane Lions</h4>
                                <p className="institution-name">AFL Season 2026 | @Round-6 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column gap-2'>
                    <button className='btn-theme btn-gray'>Cancel</button>
                    <button className='btn-theme btn-yellow'>Yes! Change my Pick</button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default ConfirmYourPick
