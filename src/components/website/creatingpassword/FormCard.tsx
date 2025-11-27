'use client'

import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { DatePicker } from 'rsuite';

import '../flags.css';



import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

import UploadImg from "../../../../public/images/file-upload-img.png";
import LanguageSwitcherCountryName from '../LanguageSwitcherCountryName';

const FormCard = () => {
    return (
        <>
            <div className='form-wrapper-main'>
                <div className='form-card-box'>
                    <div className='card-form-body'>
                        <p className='font-20 mb-mobile mb-40'>You're almost there. Enter a strong password to secure your account and complete the process.</p>
                         <FloatingLabel className="mb-4" controlId="floatingPassword" label="Create Password">
              <Form.Control type="password" placeholder="Password@123" />
              <span className='pass-container'>
                <Image src={EyeOpen} alt="" className='eye-open' />
              </span>
            </FloatingLabel>

            <FloatingLabel className="mb-4" controlId="floatingPassword" label="Confirm Password">
              <Form.Control type="password" placeholder="***********" />
              <span className='pass-container'>
                <Image src={EyeClose} alt="" className='eye-close' />
                {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
              </span>
            </FloatingLabel>

                    </div>
                    <div className='card-form-footer'>
                        <button className='btn-theme btn-yellow btn-shadow w-100'>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCard
