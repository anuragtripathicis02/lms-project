'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import LogoYello from "../../../../public/images/logo-yellow.svg";
import LogoBlack from "../../../../public/images/logo-black.svg";
import Banner from "../../../../public/images/auth-banner.png";
import LogoGooglePlay from "../../../../public/images/google-play-logo.svg";
import LogoAppstore from "../../../../public/images/app-store-logo.svg";


import LogoWhiteMobile from "../../../../public/images/banner-mob-white.png";
import LogoBlackeMobile from "../../../../public/images/banner-mob-black.png";

import EyeClose from "../../../../public/images/eye-slash.png";
import EyeOpen from "../../../../public/images/eye.png";
import SignUpUsing from '@/components/modalcomponents/SignUpUsing';


const Login = () => {

  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = () => {
    setShowLogin(true);
  };
  const handleCloseAll = () => {
    setShowLogin(false);
  };

  return (
    <div className='d-flex auth-wrapper'>
      <div className='auth-form text-center'>
        <div className='back-block text-start mb-4 d-none d-md-block'>
          <Link href="" className='back-btn'>
            <span className='icon'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#F5F5F5" />
                <path d="M29.3749 20C29.3749 20.2984 29.2564 20.5846 29.0454 20.7955C28.8344 21.0065 28.5483 21.125 28.2499 21.125H14.4687L19.2987 25.9541C19.51 26.1654 19.6287 26.4521 19.6287 26.751C19.6287 27.0499 19.51 27.3365 19.2987 27.5478C19.0873 27.7592 18.8007 27.8779 18.5018 27.8779C18.2029 27.8779 17.9163 27.7592 17.7049 27.5478L10.9549 20.7978C10.85 20.6933 10.7668 20.5691 10.71 20.4324C10.6533 20.2956 10.624 20.149 10.624 20.001C10.624 19.8529 10.6533 19.7063 10.71 19.5696C10.7668 19.4328 10.85 19.3086 10.9549 19.2041L17.7049 12.4541C17.8096 12.3495 17.9338 12.2664 18.0705 12.2098C18.2072 12.1532 18.3538 12.124 18.5018 12.124C18.6498 12.124 18.7963 12.1532 18.9331 12.2098C19.0698 12.2664 19.194 12.3495 19.2987 12.4541C19.4033 12.5587 19.4863 12.683 19.543 12.8197C19.5996 12.9564 19.6287 13.103 19.6287 13.251C19.6287 13.399 19.5996 13.5455 19.543 13.6822C19.4863 13.819 19.4033 13.9432 19.2987 14.0479L14.4687 18.875H28.2499C28.5483 18.875 28.8344 18.9936 29.0454 19.2045C29.2564 19.4155 29.3749 19.7017 29.3749 20Z" fill="#595959" />
              </svg>


            </span>
            Back to Home</Link>
        </div>
        <div className='max-card my-auto'>
          <div className='logo-mobile d-md-none'>
            <Image src={LogoWhiteMobile} alt="" />
          </div>

          <div className='auth-logo'>
            <Image src={LogoBlack} alt="" className='img-theme-white' />
            <Image src={LogoYello} alt="" className='img-theme-black' />
          </div>
          <p>Welcome Back, Champ! Sign in and get ready to make your winning picks.</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"

          >
            <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Enter Password">
            <Form.Control type="password" placeholder="Enter your password" />
            <span className='pass-container'>
              <Image src={EyeClose} alt="" className='eye-close' />
              {/* <Image src={EyeOpen} alt="" className='eye-open' /> */}
            </span>
          </FloatingLabel>
          <div className="forgot-link text-center">
            <Link href="/website/foregtpassword" className='link-underline-text'>Forgot Password?</Link>
          </div>
        </div>


        <button className='btn-theme btn-black w-100'>Log In</button>

        <div className='d-flex align-items-center justify-content-center or'>
          <div className='px-0'>----</div>
          <div className='px-2'>Or Continue With</div>
          <div className='px-0'>----</div>
        </div>

        <div className='social-auth'>
          <ul className='d-flex align-items-center justify-content-center'>
            <li><Link href="">
              <span className='icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_253_8783)">
                    <path d="M23.0938 9.91355L13.3044 9.91309C12.8721 9.91309 12.5217 10.2634 12.5217 10.6957V13.823C12.5217 14.2552 12.8721 14.6056 13.3044 14.6056H18.8171C18.2135 16.1722 17.0868 17.4842 15.6493 18.3178L18 22.387C21.7707 20.2062 24 16.3799 24 12.0965C24 11.4866 23.955 11.0506 23.8651 10.5597C23.7968 10.1867 23.4729 9.91355 23.0938 9.91355Z" fill="#167EE6" />
                    <path d="M12 19.3047C9.30218 19.3047 6.94699 17.8306 5.68207 15.6494L1.61304 17.9948C3.68374 21.5836 7.56283 24.0003 12 24.0003C14.1768 24.0003 16.2307 23.4143 18 22.3929V22.3873L15.6494 18.3181C14.5742 18.9417 13.3299 19.3047 12 19.3047Z" fill="#12B347" />
                    <path d="M18 22.3922V22.3866L15.6494 18.3174C14.5741 18.941 13.33 19.304 12 19.304V23.9996C14.1767 23.9996 16.2308 23.4135 18 22.3922Z" fill="#0F993E" />
                    <path d="M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z" fill="#FFD500" />
                    <path d="M12 4.69566C13.7593 4.69566 15.3753 5.32078 16.6375 6.36061C16.9488 6.61711 17.4014 6.59859 17.6867 6.31336L19.9024 4.09758C20.2261 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10967 14.991 0 12 0C7.56283 0 3.68374 2.41673 1.61304 6.00558L5.68207 8.35092C6.94699 6.16969 9.30218 4.69566 12 4.69566Z" fill="#FF4B26" />
                    <path d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10963 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z" fill="#D93F21" />
                  </g>
                  <defs>
                    <clipPath id="clip0_253_8783">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              Google Account
            </Link></li>
            <li><Link href="">
              <span className='icon'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M17.1185 0C17.1743 0 17.2302 0 17.2892 0C17.4262 1.69253 16.7802 2.95719 15.995 3.87301C15.2246 4.78251 14.1697 5.6646 12.4635 5.53076C12.3497 3.86247 12.9967 2.69161 13.7808 1.77789C14.508 0.92636 15.8412 0.168621 17.1185 0Z" fill="currentColor" />
                  <path d="M22.2836 17.6164C22.2836 17.6332 22.2836 17.648 22.2836 17.6638C21.8041 19.1161 21.1201 20.3607 20.2855 21.5157C19.5235 22.5643 18.5898 23.9755 16.9225 23.9755C15.4819 23.9755 14.525 23.0491 13.0485 23.0238C11.4866 22.9985 10.6277 23.7984 9.1997 23.9997C9.03635 23.9997 8.873 23.9997 8.71281 23.9997C7.6642 23.848 6.81793 23.0175 6.20141 22.2693C4.38347 20.0582 2.97865 17.2022 2.71729 13.5474C2.71729 13.189 2.71729 12.8318 2.71729 12.4735C2.82794 9.85772 4.09892 7.73099 5.78829 6.7003C6.67987 6.15228 7.90553 5.68541 9.27031 5.89408C9.85521 5.98471 10.4528 6.18495 10.9765 6.38308C11.4729 6.57383 12.0937 6.91213 12.6817 6.89421C13.0801 6.88262 13.4763 6.67501 13.8779 6.52852C15.054 6.1038 16.2069 5.61691 17.7266 5.8456C19.553 6.12172 20.8493 6.93321 21.6502 8.18521C20.1052 9.16848 18.8838 10.6502 19.0925 13.1806C19.278 15.4791 20.6143 16.8239 22.2836 17.6164Z" fill="currentColor" />
                </svg>

              </span>
              Apple Account
            </Link></li>
          </ul>
        </div>

        <div className='create-account'>
          <p className='m-0'>Don't have an account? <Link href="javascript:void(0)"
            onClick={handleLogin} className='link-underline-text'> Create Account </Link></p>
        </div>

      </div>
      <div className='auth-info text-center' style={{
        backgroundImage: "url('/images/login-bg.png')",
      }} >
        {/* <div className='auth-banner-img'>
          <Image src={Banner} alt="" />
        </div> */}
        <div className='login-foot'>
        <div className='block-head'>
          <h1>Download the App for Best Experience</h1>
          <p>Welcome Back, Champ! Sign in and get ready to make your winning picks.</p>
        </div>
        <div className='d-flex align-items-center justify-content-center auth-clients'>
          <Link href=""><Image src={LogoGooglePlay} alt="" /></Link>
          <Link href=""><Image src={LogoAppstore} alt="" /></Link>
        </div>
        </div>
      </div>
      <SignUpUsing show={showLogin} handleClose={handleCloseAll} />
    </div>
  )
}

export default Login
