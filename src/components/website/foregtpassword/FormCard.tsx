'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

const FormCard = () => {
    return (
        <>
            <div className='form-wrapper-main'>
                <div className='form-card-box'>
                    <div className='card-form-body'>
                        <p className='font-20 mb-mobile mb-40'>Lost  your password? No stress. Just drop your email below and we’ll send you a link to reset your password and get you back in.</p>

               <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"

          >
            <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
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
