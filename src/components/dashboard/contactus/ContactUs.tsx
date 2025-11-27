'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const ContactUs = () => {
    return (
        <div className='body-content-sec p-40 wrapper-deposit-money'>
            <div className='container'>
                <p className='font-20 mb-mobile mb-40'>Send your thoughts, suggestions or complaints. Just write it here and we will get bak to you in 3 working days.</p>

                

                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Select Category"
                    className="mb-4"
                >
                    <Form.Select aria-label="Floating label select example">
                        <option>Something Related to Funds</option>
                        <option value="1">Funds 1</option>
                        <option value="2">Funds 2</option>
                        <option value="3">Funds 3</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Write Here"  className="mb-4">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>

                <div className='foot-button'>
                    <button className='btn-theme btn-yellow btn-shadow'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
