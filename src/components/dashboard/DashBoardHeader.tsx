'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';

import LogoBlack from "../../../public/images/logo-black.svg";
import LogoYellow from "../../../public/images/logo-yellow.svg";
import LogoGooglePlay from "../../../public/images/google-play-logo.svg";
import LogoAppstore from "../../../public/images/app-store-logo.svg";
import ThemeToggle from '@/app/ThemeToggle';

const DashBoardHeader = () => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    // 🔹 State for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // 🔹 Add/remove class on body
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('open-menu');
        } else {
            document.body.classList.remove('open-menu');
        }
    }, [menuOpen]);

    // 🔹 Toggle handler
    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className={`header header-dashboard d-none d-md-block ${isDashboard ? 'login-head' : ''}`}>
            <div className='container'>
                <div className='d-flex align-items-center'>
                    <div className='logo'>
                        <Link href="">
                            <Image src={LogoBlack} alt='' className='img-theme-white' />
                            <Image src={LogoYellow} alt='' className='img-theme-black' />
                        </Link>
                    </div>
                    <div className='header-right'>
                        <ul className='d-flex align-items-center justify-content-center'>
                            <li><Link href="">Help & Support</Link></li>
                            <li><Link href="">Contact Us</Link></li>
                            <li><Link href="">Terms of Use</Link></li>
                            <li><Link href="">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className='user-auth store-box'>
                        <Link href="" className='store-link'>
                            <Image src={LogoGooglePlay} alt='' />
                        </Link>
                        <Link href="" className='store-link'>
                            <Image src={LogoAppstore} alt='' />
                        </Link>
                    </div>

                    {/* 🔹 Mobile nav button */}
                    <button 
                        className={`btn d-md-none bg-transparent border-0 p-0 ${menuOpen ? 'active' : ''}`}
                        onClick={handleMenuToggle}
                        aria-label="Toggle Menu"
                    >
                        <span className="mobile-nav">
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </span>
                    </button>
                </div>
            </div>

            <div className='d-none'>
                <ThemeToggle />
            </div>
            <div className='overlay'></div>
        </div>
    );
}

export default DashBoardHeader;
