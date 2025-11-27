'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";

const ChangePassword = () => {
  return (
    <div className='body-content-sec p-40 wrapper-deposit-money'>
      <div className='container'>
        <p className='font-20 mb-40 mb-mobile'>Changing your password will immediately log you out of all active sessions. You’ll need to sign in again to continue using your account.</p>

        <div className='row'>
          <div className='col-md-6'>
            <FloatingLabel className="mb-3" controlId="floatingPassword" label="Old Password">
              <Form.Control type="password" placeholder="Password@123" />
              <span className='pass-container'>
                <Image src={EyeOpen} alt="" className='eye-open' />
              </span>
            </FloatingLabel>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <FloatingLabel className="mb-3" controlId="floatingPassword" label="Create New Password">
              <Form.Control type="password" placeholder="***********" />
              <span className='pass-container'>
                <Image src={EyeClose} alt="" className='eye-close' />
                {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
              </span>
            </FloatingLabel>
          </div>
          <div className='col-md-6'>
            <FloatingLabel className="mb-3" controlId="floatingPassword" label="Confirm New Password">
              <Form.Control type="password" placeholder="***********" />
              <span className='pass-container'>
                <Image src={EyeClose} alt="" className='eye-close' />
                {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
              </span>
            </FloatingLabel>
          </div>
        </div>





        <div className='foot-button'>
          <button className='btn-theme btn-yellow btn-shadow'>Update Password</button>
        </div>

      </div>
    </div>
  )
}

export default ChangePassword
