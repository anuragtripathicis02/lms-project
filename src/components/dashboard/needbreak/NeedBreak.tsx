'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import 'rsuite/dist/rsuite-no-reset.min.css';
import { DatePicker } from 'rsuite';

import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";
import ConfirmationBeforeSuspentionModal from '@/components/modalcomponents/ConfirmationBeforeSuspentionModal';

const NeedBreak = () => {

    const [showCodeVerification, setShowCodeVerification] = useState(false);
    const handleCodeVerification = () => {
        setShowCodeVerification(true);
    };
    
    const handleCloseAll = () => {
        setShowCodeVerification(false);
    };

    return (
        <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-40 mb-mobile'>Pause your account for 1–30 days. Reactivate anytime by logging in, or it resumes automatically after the chosen period.</p>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Deactivating For"
                                className="mb-4"
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>24 Hours</option>
                                    <option value="1">24 Hours</option>
                                    <option value="2">12 Hours</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label="Deactivation From"
                                className="mb-4"
                            >
                                <Form.Select aria-label="Floating label select example">
                                    <option>Custom Date</option>
                                    <option value="1">Custom Date</option>
                                    <option value="2">Custom Date</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='mb-3'>
                            <div className='position-relative card-language-selector'>
                                <label className='form-labl'>Deactivation From</label>
                                <DatePicker placeholder="Date of Birth" oneTap />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot-button'>
                    <button className='btn-theme btn-yellow btn-shadow' onClick={handleCodeVerification}>Schedule Suspension</button>
                </div>
            </div>
            <ConfirmationBeforeSuspentionModal show={showCodeVerification} handleClose={handleCloseAll} />
        </div>
    )
}

export default NeedBreak
