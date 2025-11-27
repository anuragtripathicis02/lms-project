import Link from 'next/link'
import React from 'react'

const BackLink = () => {
    return (
        <div className='back-toolbar'>
            <div className='container'>
                <div className='me-auto'>
                    <Link href="" className='d-inline-flex align-items-center'>
                        Verify your identity</Link>
                </div>
            </div>
        </div>
    )
}

export default BackLink
