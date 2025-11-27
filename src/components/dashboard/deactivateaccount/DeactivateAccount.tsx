"use client";
import ConfirmationDeleteModal from '@/components/modalcomponents/ConfirmationDeleteModal'
import React, { useState } from 'react'

const DeactivateAccount = () => {

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
        <p className='font-20 mb-mobile'>Deleting your account will permanently remove all your personal data, transaction history, and access to the platform.</p>
        <p className='font-20 mb-mobile'>Once you confirm, your account will be scheduled for deletion after a 15-day grace period. During this period, you can log in anytime to cancel the deletion request and restore your account.</p>
        <p className='font-20 mb-mobile'>After the grace period ends, your account and all associated data will be permanently deleted and cannot be recovered.</p>

        <div className='foot-button'>
          <button className='btn-theme btn-red btn-shadow' onClick={handleCodeVerification}>Proceed to Deletee</button>
        </div>

      </div>
      <ConfirmationDeleteModal show={showCodeVerification} handleClose={handleCloseAll} />
    </div>
  )
}

export default DeactivateAccount
