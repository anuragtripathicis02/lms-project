'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

import UploadImg from "../../../../public/images/file-upload-img.png";
import AccountVerified from '@/components/modalcomponents/AccountVerified';

const FormCard = () => {

      const [showAccountverified, setShowAccountverified] = useState(false);
      const handleAccountverified = () => {
        setShowAccountverified(true);
      };
      const handleCloseAll = () => {
        setShowAccountverified(false);
      };

    return (
        <>
            <div className='form-wrapper-main'>
                <div className='form-card-box'>
                    <div className='card-form-body'>
                        <p className='font-20 mb-mobile mb-40'>You’re almost there! To keep your account safe and unlock all features, please verify your identity with a government-issued ID.</p>



                        <FloatingLabel
                            controlId="floatingInput"
                            label="Id Number"
                            className="mb-4"

                        >
                            <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Select ID Proof"
                            className="mb-4"
                        >
                            <Form.Select aria-label="Floating label select example">
                                <option>Driver’s License</option>
                                <option value="1">License 1</option>
                                <option value="2">License 2</option>
                                <option value="3">License 3</option>
                            </Form.Select>
                        </FloatingLabel>

                        <div className="image-upload ">
                            <label htmlFor="file-input" className='form-control'>
                                <span>Upload ID Proof</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.25 6.75001H12.3103L9.75 4.18969C9.61122 4.0498 9.44601 3.93889 9.26398 3.86341C9.08196 3.78792 8.88674 3.74938 8.68969 3.75001H3.75C3.35218 3.75001 2.97064 3.90804 2.68934 4.18935C2.40804 4.47065 2.25 4.85218 2.25 5.25001V18.8081C2.2505 19.1904 2.40257 19.5568 2.67286 19.8271C2.94316 20.0974 3.30962 20.2495 3.69188 20.25H20.3334C20.709 20.2495 21.069 20.1001 21.3346 19.8346C21.6001 19.569 21.7495 19.209 21.75 18.8334V8.25001C21.75 7.85218 21.592 7.47065 21.3107 7.18935C21.0294 6.90804 20.6478 6.75001 20.25 6.75001ZM8.68969 5.25001L10.1897 6.75001H3.75V5.25001H8.68969ZM20.25 18.75H3.75V8.25001H20.25V18.75ZM12 10.5C12.1989 10.5 12.3897 10.579 12.5303 10.7197C12.671 10.8603 12.75 11.0511 12.75 11.25V12.75H14.25C14.4489 12.75 14.6397 12.829 14.7803 12.9697C14.921 13.1103 15 13.3011 15 13.5C15 13.6989 14.921 13.8897 14.7803 14.0303C14.6397 14.171 14.4489 14.25 14.25 14.25H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V14.25H9.75C9.55109 14.25 9.36032 14.171 9.21967 14.0303C9.07902 13.8897 9 13.6989 9 13.5C9 13.3011 9.07902 13.1103 9.21967 12.9697C9.36032 12.829 9.55109 12.75 9.75 12.75H11.25V11.25C11.25 11.0511 11.329 10.8603 11.4697 10.7197C11.6103 10.579 11.8011 10.5 12 10.5Z" fill="currentColor" />
                                </svg>
                            </label>

                            <input id="file-input" type="file" />
                        </div>

                        <div className='upload-card-box form-lable-box card-language-selector position-relative'>
                            <Image src={UploadImg} alt=''/>
                            <div className='button-box'>
                                <button className='btnsm remove-btn'>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M13.5 3.91211H11V3.41211C11 3.01428 10.842 2.63275 10.5607 2.35145C10.2794 2.07014 9.89782 1.91211 9.5 1.91211H6.5C6.10218 1.91211 5.72064 2.07014 5.43934 2.35145C5.15804 2.63275 5 3.01428 5 3.41211V3.91211H2.5C2.36739 3.91211 2.24021 3.96479 2.14645 4.05856C2.05268 4.15232 2 4.2795 2 4.41211C2 4.54472 2.05268 4.67189 2.14645 4.76566C2.24021 4.85943 2.36739 4.91211 2.5 4.91211H3V13.9121C3 14.1773 3.10536 14.4317 3.29289 14.6192C3.48043 14.8068 3.73478 14.9121 4 14.9121H12C12.2652 14.9121 12.5196 14.8068 12.7071 14.6192C12.8946 14.4317 13 14.1773 13 13.9121V4.91211H13.5C13.6326 4.91211 13.7598 4.85943 13.8536 4.76566C13.9473 4.67189 14 4.54472 14 4.41211C14 4.2795 13.9473 4.15232 13.8536 4.05856C13.7598 3.96479 13.6326 3.91211 13.5 3.91211ZM6 3.41211C6 3.2795 6.05268 3.15232 6.14645 3.05856C6.24021 2.96479 6.36739 2.91211 6.5 2.91211H9.5C9.63261 2.91211 9.75979 2.96479 9.85355 3.05856C9.94732 3.15232 10 3.2795 10 3.41211V3.91211H6V3.41211ZM12 13.9121H4V4.91211H12V13.9121ZM7 7.41211V11.4121C7 11.5447 6.94732 11.6719 6.85355 11.7657C6.75979 11.8594 6.63261 11.9121 6.5 11.9121C6.36739 11.9121 6.24021 11.8594 6.14645 11.7657C6.05268 11.6719 6 11.5447 6 11.4121V7.41211C6 7.2795 6.05268 7.15232 6.14645 7.05856C6.24021 6.96479 6.36739 6.91211 6.5 6.91211C6.63261 6.91211 6.75979 6.96479 6.85355 7.05856C6.94732 7.15232 7 7.2795 7 7.41211ZM10 7.41211V11.4121C10 11.5447 9.94732 11.6719 9.85355 11.7657C9.75979 11.8594 9.63261 11.9121 9.5 11.9121C9.36739 11.9121 9.24021 11.8594 9.14645 11.7657C9.05268 11.6719 9 11.5447 9 11.4121V7.41211C9 7.2795 9.05268 7.15232 9.14645 7.05856C9.24021 6.96479 9.36739 6.91211 9.5 6.91211C9.63261 6.91211 9.75979 6.96479 9.85355 7.05856C9.94732 7.15232 10 7.2795 10 7.41211Z" fill="currentColor" />
                                    </svg>

                                    Remove</button>
                                <button className='btnsm change-btn'>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 3.91289V6.91289C14 7.0455 13.9473 7.17267 13.8536 7.26644C13.7598 7.36021 13.6326 7.41289 13.5 7.41289H10.5C10.3674 7.41289 10.2402 7.36021 10.1464 7.26644C10.0527 7.17267 10 7.0455 10 6.91289C10 6.78028 10.0527 6.6531 10.1464 6.55933C10.2402 6.46557 10.3674 6.41289 10.5 6.41289H12.2931L11.3787 5.49851C10.4495 4.56502 9.1878 4.03836 7.87063 4.03414H7.8425C6.53636 4.03108 5.28151 4.54231 4.34937 5.45726C4.25389 5.5464 4.12731 5.59463 3.99672 5.59164C3.86612 5.58864 3.74189 5.53466 3.65059 5.44123C3.55929 5.34781 3.50817 5.22237 3.50818 5.09174C3.50819 4.96111 3.55932 4.83568 3.65062 4.74226C4.78033 3.63814 6.29988 3.02406 7.87952 3.03331C9.45916 3.04255 10.9714 3.67436 12.0881 4.79164L13 5.70601V3.91289C13 3.78028 13.0527 3.6531 13.1464 3.55933C13.2402 3.46557 13.3674 3.41289 13.5 3.41289C13.6326 3.41289 13.7598 3.46557 13.8536 3.55933C13.9473 3.6531 14 3.78028 14 3.91289ZM11.6506 12.3685C10.7093 13.288 9.44337 13.7994 8.12747 13.7917C6.81156 13.7839 5.55175 13.2578 4.62125 12.3273L3.70688 11.4129H5.5C5.63261 11.4129 5.75979 11.3602 5.85355 11.2664C5.94732 11.1727 6 11.0455 6 10.9129C6 10.7803 5.94732 10.6531 5.85355 10.5593C5.75979 10.4656 5.63261 10.4129 5.5 10.4129H2.5C2.36739 10.4129 2.24021 10.4656 2.14645 10.5593C2.05268 10.6531 2 10.7803 2 10.9129V13.9129C2 14.0455 2.05268 14.1727 2.14645 14.2664C2.24021 14.3602 2.36739 14.4129 2.5 14.4129C2.63261 14.4129 2.75979 14.3602 2.85355 14.2664C2.94732 14.1727 3 14.0455 3 13.9129V12.1198L3.91438 13.0341C5.02951 14.1549 6.544 14.787 8.125 14.7916H8.15812C9.72568 14.7957 11.2317 14.182 12.35 13.0835C12.4413 12.9901 12.4924 12.8647 12.4924 12.734C12.4925 12.6034 12.4413 12.478 12.35 12.3845C12.2587 12.2911 12.1345 12.2371 12.0039 12.2341C11.8733 12.2311 11.7467 12.2794 11.6512 12.3685H11.6506Z" fill="currentColor" />
                                    </svg>
                    <input id="file-change" type="file" />
                                    Change</button>
                            </div>
                            <label className='form-lable-box'>Upload ID Proof</label>
                        </div>

                    </div>
                    <div className='card-form-footer'>
                        <button className='btn-theme btn-yellow btn-shadow w-100' onClick={handleAccountverified}>Submit to Verify</button>
                    </div>
                </div>
            </div>
            <AccountVerified show={showAccountverified} handleClose={handleCloseAll}/>
        </>
    )
}

export default FormCard
