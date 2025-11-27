'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { DatePicker } from 'rsuite';

import '../../website/flags.css';

import UserImage from "../../../../public/images/user-auth.png";
import LanguageSwitcherCountryName from '@/components/website/LanguageSwitcherCountryName';
import ChangeUsername from '@/components/modalcomponents/ChangeUsername';

const EditProfile = () => {

  const [showChangeName, setShowChangeName] = useState(false);
  const handleChangeName = () => {
    setShowChangeName(true);
  };
  const handleCloseAll = () => {
    setShowChangeName(false);
  };

  return (
    <div className='sec-edit-profile p-40 wrapper-deposit-money'>
      <div className='container'>
        <div className='upload-picture d-flex align-items-center mb-40'>
          <div className='profile-picture'>
            <Image src={UserImage} alt='' />
            <label htmlFor="fileInput" className="upload-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.25 4.375H14.0844L13.0195 2.77813C12.9625 2.69262 12.8852 2.6225 12.7946 2.57399C12.704 2.52548 12.6028 2.50006 12.5 2.5H7.5C7.39721 2.50006 7.29602 2.52548 7.2054 2.57399C7.11478 2.6225 7.03752 2.69262 6.98047 2.77813L5.91484 4.375H3.75C3.25272 4.375 2.77581 4.57254 2.42417 4.92417C2.07254 5.27581 1.875 5.75272 1.875 6.25V15C1.875 15.4973 2.07254 15.9742 2.42417 16.3258C2.77581 16.6775 3.25272 16.875 3.75 16.875H16.25C16.7473 16.875 17.2242 16.6775 17.5758 16.3258C17.9275 15.9742 18.125 15.4973 18.125 15V6.25C18.125 5.75272 17.9275 5.27581 17.5758 4.92417C17.2242 4.57254 16.7473 4.375 16.25 4.375ZM16.875 15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H3.75C3.58424 15.625 3.42527 15.5592 3.30806 15.4419C3.19085 15.3247 3.125 15.1658 3.125 15V6.25C3.125 6.08424 3.19085 5.92527 3.30806 5.80806C3.42527 5.69085 3.58424 5.625 3.75 5.625H6.25C6.35292 5.62507 6.45427 5.59971 6.54504 5.5512C6.63581 5.50268 6.71319 5.43249 6.77031 5.34688L7.83437 3.75H12.1648L13.2297 5.34688C13.2868 5.43249 13.3642 5.50268 13.455 5.5512C13.5457 5.59971 13.6471 5.62507 13.75 5.625H16.25C16.4158 5.625 16.5747 5.69085 16.6919 5.80806C16.8092 5.92527 16.875 6.08424 16.875 6.25V15ZM10 6.875C9.32013 6.875 8.65552 7.07661 8.09023 7.45432C7.52493 7.83204 7.08434 8.3689 6.82416 8.99703C6.56399 9.62515 6.49591 10.3163 6.62855 10.9831C6.76119 11.6499 7.08858 12.2624 7.56932 12.7432C8.05006 13.2239 8.66257 13.5513 9.32938 13.6839C9.99619 13.8166 10.6874 13.7485 11.3155 13.4883C11.9436 13.2282 12.4805 12.7876 12.8582 12.2223C13.2359 11.657 13.4375 10.9924 13.4375 10.3125C13.4365 9.40114 13.074 8.52739 12.4295 7.88296C11.7851 7.23853 10.9114 6.87603 10 6.875ZM10 12.5C9.56735 12.5 9.14442 12.3717 8.78469 12.1313C8.42496 11.891 8.14458 11.5493 7.97901 11.1496C7.81345 10.7499 7.77013 10.3101 7.85453 9.88574C7.93894 9.46141 8.14728 9.07163 8.4532 8.7657C8.75913 8.45978 9.14891 8.25144 9.57324 8.16703C9.99757 8.08263 10.4374 8.12595 10.8371 8.29151C11.2368 8.45708 11.5785 8.73746 11.8188 9.09719C12.0592 9.45692 12.1875 9.87985 12.1875 10.3125C12.1875 10.8927 11.957 11.4491 11.5468 11.8593C11.1366 12.2695 10.5802 12.5 10 12.5Z" fill="currentColor" />
              </svg>
            </label>
            <input type="file" id="fileInput" accept="image/*"></input>
          </div>
          <div className='flex-grow-1'>
            <p>Your Public username:</p>
            <h2>@johnD123 <Link href="" className='link-edit' onClick={handleChangeName}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M28.7675 8.81786L23.1825 3.23161C22.9504 2.99936 22.6747 2.81512 22.3713 2.68942C22.0679 2.56372 21.7428 2.49902 21.4144 2.49902C21.086 2.49902 20.7608 2.56372 20.4574 2.68942C20.1541 2.81512 19.8784 2.99936 19.6463 3.23161L4.23251 18.6466C3.99951 18.8781 3.81479 19.1535 3.68905 19.4569C3.56331 19.7603 3.49905 20.0857 3.50001 20.4141V26.0004C3.50001 26.6634 3.7634 27.2993 4.23224 27.7681C4.70108 28.237 5.33697 28.5004 6.00001 28.5004H11.5863C11.9147 28.5013 12.24 28.437 12.5434 28.3112C12.8468 28.1855 13.1222 28.0008 13.3538 27.7679L28.7675 12.3529C29.2362 11.884 29.4995 11.2483 29.4995 10.5854C29.4995 9.92245 29.2362 9.28668 28.7675 8.81786ZM11.375 25.5004H6.50001V20.6254L17 10.1254L21.875 15.0004L11.375 25.5004ZM24 12.8754L19.125 8.00036L21.4175 5.70786L26.2925 10.5829L24 12.8754Z" fill="currentColor" />
              </svg>
            </Link></h2>
          </div>
        </div>
        <div className='form-edit-profile'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-4"
              >
                <Form.Control type="email" placeholder="John" />
              </FloatingLabel>
            </div>
            <div className='col-lg-4 col-md-6'>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-4"
              >
                <Form.Control type="email" placeholder="John" />
              </FloatingLabel>
            </div>
            <div className='col-lg-4 col-md-6'>
              <FloatingLabel
                controlId="floatingInput"
                label="Email Address"
                className="mb-4"
              >
                <Form.Control type="email" placeholder="Johnsmith1001@gmail.com" />
                <span className='pass-container'>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M16.7806 9.21937C16.8504 9.28903 16.9057 9.37175 16.9434 9.46279C16.9812 9.55384 17.0006 9.65144 17.0006 9.75C17.0006 9.84856 16.9812 9.94616 16.9434 10.0372C16.9057 10.1283 16.8504 10.211 16.7806 10.2806L11.5306 15.5306C11.461 15.6004 11.3783 15.6557 11.2872 15.6934C11.1962 15.7312 11.0986 15.7506 11 15.7506C10.9014 15.7506 10.8038 15.7312 10.7128 15.6934C10.6218 15.6557 10.539 15.6004 10.4694 15.5306L8.21938 13.2806C8.07865 13.1399 7.99959 12.949 7.99959 12.75C7.99959 12.551 8.07865 12.3601 8.21938 12.2194C8.36011 12.0786 8.55098 11.9996 8.75 11.9996C8.94903 11.9996 9.1399 12.0786 9.28063 12.2194L11 13.9397L15.7194 9.21937C15.789 9.14964 15.8718 9.09432 15.9628 9.05658C16.0538 9.01884 16.1514 8.99941 16.25 8.99941C16.3486 8.99941 16.4462 9.01884 16.5372 9.05658C16.6283 9.09432 16.711 9.14964 16.7806 9.21937ZM22.25 12C22.25 13.9284 21.6782 15.8134 20.6068 17.4168C19.5355 19.0202 18.0127 20.2699 16.2312 21.0078C14.4496 21.7458 12.4892 21.9389 10.5979 21.5627C8.70656 21.1865 6.96928 20.2579 5.60571 18.8943C4.24215 17.5307 3.31355 15.7934 2.93735 13.9021C2.56114 12.0108 2.75422 10.0504 3.49218 8.26884C4.23013 6.48726 5.47982 4.96451 7.08319 3.89317C8.68657 2.82183 10.5716 2.25 12.5 2.25C15.085 2.25273 17.5634 3.28084 19.3913 5.10872C21.2192 6.93661 22.2473 9.41498 22.25 12ZM20.75 12C20.75 10.3683 20.2661 8.77325 19.3596 7.41655C18.4531 6.05984 17.1646 5.00242 15.6571 4.37799C14.1497 3.75357 12.4909 3.59019 10.8905 3.90852C9.29017 4.22685 7.82016 5.01259 6.66637 6.16637C5.51259 7.32015 4.72685 8.79016 4.40853 10.3905C4.0902 11.9908 4.25358 13.6496 4.878 15.1571C5.50242 16.6646 6.55984 17.9531 7.91655 18.8596C9.27326 19.7661 10.8683 20.25 12.5 20.25C14.6873 20.2475 16.7843 19.3775 18.3309 17.8309C19.8775 16.2843 20.7475 14.1873 20.75 12Z" fill="#00B64C" />
                  </svg>


                </span>
              </FloatingLabel>
            </div>
            <div className='col-lg-4 col-md-6 card-language-selector country-code'>
              <div className='mb-4'>

                <div className='group-form-box form-lable-box position-relative'>
                  <label className='form-labl'>Enter Phone</label>
                  <LanguageSwitcherCountryName />

                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='mb-4'>
                <DatePicker placeholder="Date of Birth" oneTap />
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Gender"
                className="mb-4"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Male</option>
                  <option value="1">Female</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='mb-4 card-language-selector position-relative'>
                <label className='form-labl'>Select Country</label>
                <LanguageSwitcherCountryName />
                <div className='dropdown-arrow'>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20.0306 9.53104L12.5306 17.031C12.4609 17.1008 12.3782 17.1561 12.2871 17.1938C12.1961 17.2316 12.0985 17.251 11.9999 17.251C11.9014 17.251 11.8038 17.2316 11.7127 17.1938C11.6217 17.1561 11.539 17.1008 11.4693 17.031L3.9693 9.53104C3.82857 9.39031 3.74951 9.19944 3.74951 9.00042C3.74951 8.80139 3.82857 8.61052 3.9693 8.46979C4.11003 8.32906 4.30091 8.25 4.49993 8.25C4.69895 8.25 4.88982 8.32906 5.03055 8.46979L11.9999 15.4401L18.9693 8.46979C19.039 8.40011 19.1217 8.34483 19.2128 8.30712C19.3038 8.26941 19.4014 8.25 19.4999 8.25C19.5985 8.25 19.6961 8.26941 19.7871 8.30712C19.8781 8.34483 19.9609 8.40011 20.0306 8.46979C20.1002 8.53947 20.1555 8.6222 20.1932 8.71324C20.2309 8.80429 20.2503 8.90187 20.2503 9.00042C20.2503 9.09896 20.2309 9.19654 20.1932 9.28759C20.1555 9.37863 20.1002 9.46136 20.0306 9.53104Z" fill="currentColor" />
                  </svg>

                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter City"
                className="mb-4"
              >
                <Form.Control type="email" placeholder="Sydney" />
              </FloatingLabel>
            </div>
          </div>

        </div>
        <div className='foot-button'>
          <button className='btn-theme btn-yellow'>Save Details</button>
        </div>
      </div>

      <ChangeUsername show={showChangeName} handleClose={handleCloseAll} />
    </div>
  )
}

export default EditProfile
