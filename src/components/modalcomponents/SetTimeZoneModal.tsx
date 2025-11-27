"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import Image from 'next/image';



import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LanguageSwitcherCountryName from '../website/LanguageSwitcherCountryName';


import '../website/flags.css';

const SetTimeZoneModal = ({ show, handleClose }: any) => {
    return (
        <Modal size="sm" show={show} onHide={handleClose} centered className="common-modal-sec report-modal-classify w-500 pt-4">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>

            </Button>

            <Modal.Body className="common-modal-body">
                <h2>Set Time Zone</h2>
                <p className='mb-24 pb-2'>Select time zone which suits you the best. round closure countdown and match timing will be adjusted accordingly.</p>

                <div className='mb-4 card-language-selector position-relative'>
                    <label className='form-labl'>Select Country</label>
                    <LanguageSwitcherCountryName />
                    <div className='dropdown-arrow'>
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M20.0306 9.53104L12.5306 17.031C12.4609 17.1008 12.3782 17.1561 12.2871 17.1938C12.1961 17.2316 12.0985 17.251 11.9999 17.251C11.9014 17.251 11.8038 17.2316 11.7127 17.1938C11.6217 17.1561 11.539 17.1008 11.4693 17.031L3.9693 9.53104C3.82857 9.39031 3.74951 9.19944 3.74951 9.00042C3.74951 8.80139 3.82857 8.61052 3.9693 8.46979C4.11003 8.32906 4.30091 8.25 4.49993 8.25C4.69895 8.25 4.88982 8.32906 5.03055 8.46979L11.9999 15.4401L18.9693 8.46979C19.039 8.40011 19.1217 8.34483 19.2128 8.30712C19.3038 8.26941 19.4014 8.25 19.4999 8.25C19.5985 8.25 19.6961 8.26941 19.7871 8.30712C19.8781 8.34483 19.9609 8.40011 20.0306 8.46979C20.1002 8.53947 20.1555 8.6222 20.1932 8.71324C20.2309 8.80429 20.2503 8.90187 20.2503 9.00042C20.2503 9.09896 20.2309 9.19654 20.1932 9.28759C20.1555 9.37863 20.1002 9.46136 20.0306 9.53104Z" fill="currentColor" />
                                </svg>

                            </div>
                </div>

                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Select Your Bank"
                    className="mb-4"
                >
                    <Form.Select aria-label="Floating label select example">
                        <option>Choose Timezone</option>
                        <option value="1">Adelaide (GMT+10:30)</option>
                        <option value="2">Adelaide (GMT+11:30)</option>
                        <option value="3">Adelaide (GMT+12:30)</option>
                    </Form.Select>
                </FloatingLabel>


                <button className='btn-theme btn-yellow w-100'>Save Preference</button>
            </Modal.Body>

        </Modal>
    )
}

export default SetTimeZoneModal
