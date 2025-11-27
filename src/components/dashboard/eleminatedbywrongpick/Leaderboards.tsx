'use client'
import Link from 'next/link'
import Image from "next/image";

import Winner from "../../../../public/images/winner-player.png";

import EliminatedImg1 from "../../../../public/images/eliminated-img-1.png";
import EliminatedImg2 from "../../../../public/images/eliminated-img-2.png";
import EliminatedImg3 from "../../../../public/images/eliminated-img-3.png";
import EliminatedImg4 from "../../../../public/images/eliminated-img-4.png";
import EliminatedImg5 from "../../../../public/images/eliminated-img-5.png";
import EliminatedImg6 from "../../../../public/images/eliminated-img-6.png";
import EliminatedImg7 from "../../../../public/images/eliminated-img-7.png";


const Leaderboards = () => {
    return (
        <div className='sec-leaderboard  mt-36'>
            <div className='sec-eliminated'>
                <div className='d-lg-flex'>
                    <div className='aside-winner'>
                        <h3 className='player-title'>Winner</h3>
                        <div className='card-winner'>
                            <div className='card-winner-img'>
                                <Image src={Winner} alt='' />
                                <div className='winner-icon'>
                                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_955_99856)">
                                            <path d="M45.4442 31.3883L33.991 43.9893C33.6588 44.3539 33.2152 44.5982 32.7294 44.6842C32.2437 44.7701 31.7432 44.6927 31.3061 44.4641L10.1907 33.3752C9.75442 33.1451 9.40661 32.777 9.20161 32.3283C8.99661 31.8796 8.94596 31.3757 9.05758 30.8953L12.9301 14.3132C13.0224 13.9136 13.2232 13.5472 13.5104 13.2544C13.7976 12.9616 14.1601 12.7538 14.5579 12.6539C14.9557 12.554 15.3733 12.5659 15.7648 12.6882C16.1563 12.8105 16.5064 13.0385 16.7766 13.3471L21.7871 19.0634C21.8376 19.1214 21.9055 19.1617 21.9806 19.1783C22.0558 19.1949 22.1343 19.1869 22.2046 19.1556L31.3053 15.04C31.6137 14.8988 31.9504 14.8301 32.2894 14.8393C32.6285 14.8485 32.9609 14.9353 33.2612 15.093C33.5615 15.2507 33.8217 15.4751 34.0217 15.749C34.2217 16.0229 34.3563 16.3391 34.4151 16.6731L36.193 26.5017C36.207 26.5774 36.245 26.6465 36.3014 26.699C36.3577 26.7514 36.4294 26.7844 36.5058 26.7931L44.0561 27.6732C44.4604 27.7261 44.8426 27.8881 45.1617 28.1418C45.4808 28.3955 45.7248 28.7313 45.8675 29.1132C46.0102 29.4952 46.0462 29.9087 45.9716 30.3095C45.8971 30.7103 45.7147 31.0833 45.4442 31.3883Z" fill="url(#paint0_linear_955_99856)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_955_99856" x1="10.6825" y1="18.4345" x2="43.3377" y2="35.5837" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFDE00" />
                                                <stop offset="1" stop-color="#FD5900" />
                                            </linearGradient>
                                            <clipPath id="clip0_955_99856">
                                                <rect width="40" height="40" fill="white" transform="translate(18.5978) rotate(27.7066)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4>johnd123</h4>
                            <p className='mb-0'>Survived : <b>21 Rounds</b></p>
                        </div>

                        <div className='winning-prize d-md-none'>
                            <p className='m-0'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1133 11.2832H12.8852V15.3145H11.1133V11.2832Z" fill="url(#paint0_linear_1159_66629)" />
                                <path d="M9.99805 17.0402C9.99805 15.934 10.8934 15.0293 11.9996 15.0293C13.1059 15.0293 14.0012 15.934 14.0012 17.0402H9.99805Z" fill="url(#paint1_linear_1159_66629)" />
                                <path d="M9.1875 17.0391H14.8125C15.3281 17.0391 15.75 17.4609 15.75 17.9766V19.6172H8.25V17.9766C8.25 17.4609 8.67188 17.0391 9.1875 17.0391Z" fill="url(#paint2_linear_1159_66629)" />
                                <path d="M7.66406 19.6172H16.3359C17.0484 19.6172 17.625 20.1938 17.625 20.9062C17.625 21.6188 17.0484 22.1953 16.3359 22.1953H7.66406C6.95156 22.1953 6.375 21.6188 6.375 20.9062C6.375 20.1938 6.95156 19.6172 7.66406 19.6172Z" fill="url(#paint3_linear_1159_66629)" />
                                <path d="M13.8979 16.6365C13.7807 16.6365 13.6776 16.5475 13.6635 16.4256C13.6494 16.2943 13.7432 16.1818 13.8744 16.1678C13.9026 16.1631 15.6416 15.9662 17.301 14.6443C19.4994 12.8912 20.5729 9.94278 20.3948 6.12715C20.3901 5.9959 20.4885 5.88809 20.6198 5.8834C20.7463 5.87403 20.8588 5.97715 20.8635 6.1084C20.9619 8.32559 20.6666 10.2568 19.9776 11.8506C19.4198 13.135 18.6135 14.2037 17.5729 15.0287C15.801 16.4303 13.9963 16.6318 13.9213 16.6365C13.9166 16.6365 13.9073 16.6365 13.8979 16.6365Z" fill="url(#paint4_linear_1159_66629)" />
                                <path d="M22.4395 8.84502C21.6145 9.5294 20.4473 9.47784 20.4473 9.47784C20.4473 9.47784 20.616 8.32002 21.441 7.63565C22.266 6.95127 23.4332 7.00284 23.4332 7.00284C23.4332 7.00284 23.2645 8.16065 22.4395 8.84502Z" fill="url(#paint5_linear_1159_66629)" />
                                <path d="M19.9732 7.43984C20.5873 8.31641 20.4419 9.47891 20.4419 9.47891C20.4419 9.47891 19.3029 9.21641 18.6888 8.33984C18.0748 7.46328 18.2201 6.30078 18.2201 6.30078C18.2201 6.30078 19.3591 6.56328 19.9732 7.43984Z" fill="url(#paint6_linear_1159_66629)" />
                                <path d="M19.3495 9.97578C19.8886 10.9039 19.6448 12.0477 19.6448 12.0477C19.6448 12.0477 18.5292 11.6867 17.9948 10.7633C17.4558 9.83516 17.6995 8.69141 17.6995 8.69141C17.6995 8.69141 18.8151 9.04766 19.3495 9.97578Z" fill="url(#paint7_linear_1159_66629)" />
                                <path d="M18.3186 12.357C18.5342 13.407 17.9389 14.4148 17.9389 14.4148C17.9389 14.4148 16.9967 13.7211 16.7858 12.6711C16.5748 11.6211 17.1654 10.6133 17.1654 10.6133C17.1654 10.6133 18.1029 11.307 18.3186 12.357Z" fill="url(#paint8_linear_1159_66629)" />
                                <path d="M16.6727 14.2453C16.4524 15.2953 15.5055 15.9844 15.5055 15.9844C15.5055 15.9844 14.9148 14.9719 15.1352 13.9266C15.3555 12.8813 16.3023 12.1875 16.3023 12.1875C16.3023 12.1875 16.893 13.1953 16.6727 14.2453Z" fill="url(#paint9_linear_1159_66629)" />
                                <path d="M21.6844 11.5974C20.8031 12.2021 19.6406 12.0474 19.6406 12.0474C19.6406 12.0474 19.9125 10.9083 20.7984 10.3037C21.6844 9.69897 22.8422 9.85366 22.8422 9.85366C22.8422 9.85366 22.5703 10.9927 21.6844 11.5974Z" fill="url(#paint10_linear_1159_66629)" />
                                <path d="M20.034 14.4334C19.0355 14.8225 17.9434 14.41 17.9434 14.41C17.9434 14.41 18.4684 13.3647 19.4668 12.9756C20.4652 12.5866 21.5574 12.9991 21.5574 12.9991C21.5574 12.9991 21.0324 14.0444 20.034 14.4334Z" fill="url(#paint11_linear_1159_66629)" />
                                <path d="M17.423 16.8086C16.3496 16.7804 15.5059 15.9742 15.5059 15.9742C15.5059 15.9742 16.3965 15.2148 17.4652 15.2429C18.534 15.2711 19.3824 16.0773 19.3824 16.0773C19.3824 16.0773 18.4918 16.8367 17.423 16.8086Z" fill="url(#paint12_linear_1159_66629)" />
                                <path d="M21.4348 5.55C21.4348 6.62344 20.652 7.49063 20.652 7.49063C20.652 7.49063 19.8691 6.62344 19.8691 5.55C19.8691 4.47656 20.6473 3.60938 20.6473 3.60938C20.6473 3.60938 21.4348 4.47656 21.4348 5.55Z" fill="url(#paint13_linear_1159_66629)" />
                                <path d="M10.1007 16.6365C10.2179 16.6365 10.321 16.5475 10.335 16.4256C10.3491 16.2943 10.2554 16.1818 10.1241 16.1678C10.096 16.1631 8.35692 15.9662 6.69755 14.6443C4.49911 12.8912 3.42567 9.94278 3.6038 6.12715C3.60849 5.9959 3.51005 5.88809 3.3788 5.8834C3.25224 5.87403 3.13974 5.97715 3.13505 6.1084C3.03192 8.32559 3.33192 10.2568 4.02099 11.8506C4.5788 13.135 5.38505 14.2037 6.42567 15.0287C8.19755 16.4303 10.0022 16.6318 10.0772 16.6365H10.1007Z" fill="url(#paint14_linear_1159_66629)" />
                                <path d="M1.56016 8.84502C2.38516 9.5294 3.55703 9.47784 3.55703 9.47784C3.55703 9.47784 3.38828 8.32002 2.56328 7.63565C1.73828 6.95127 0.566406 7.00284 0.566406 7.00284C0.566406 7.00284 0.735156 8.16065 1.56016 8.84502Z" fill="url(#paint15_linear_1159_66629)" />
                                <path d="M4.02671 7.43984C3.41265 8.31641 3.55796 9.47891 3.55796 9.47891C3.55796 9.47891 4.69703 9.21641 5.31109 8.33984C5.92515 7.46328 5.77984 6.30078 5.77984 6.30078C5.77984 6.30078 4.64078 6.56328 4.02671 7.43984Z" fill="url(#paint16_linear_1159_66629)" />
                                <path d="M4.6494 9.97578C4.11503 10.9039 4.35409 12.0477 4.35409 12.0477C4.35409 12.0477 5.46972 11.6867 6.00409 10.7633C6.53847 9.83984 6.2994 8.69141 6.2994 8.69141C6.2994 8.69141 5.18378 9.04766 4.6494 9.97578Z" fill="url(#paint17_linear_1159_66629)" />
                                <path d="M5.67987 12.357C5.46425 13.407 6.05956 14.4148 6.05956 14.4148C6.05956 14.4148 7.00175 13.7211 7.21737 12.6711C7.433 11.6211 6.83768 10.6133 6.83768 10.6133C6.83768 10.6133 5.8955 11.307 5.67987 12.357Z" fill="url(#paint18_linear_1159_66629)" />
                                <path d="M7.32657 14.2453C7.54688 15.2953 8.49376 15.9844 8.49376 15.9844C8.49376 15.9844 9.08438 14.9719 8.86407 13.9266C8.64376 12.8813 7.69688 12.1875 7.69688 12.1875C7.69688 12.1875 7.10626 13.1953 7.32657 14.2453Z" fill="url(#paint19_linear_1159_66629)" />
                                <path d="M2.31406 11.5974C3.19531 12.2021 4.35781 12.0474 4.35781 12.0474C4.35781 12.0474 4.08594 10.9083 3.2 10.3037C2.31406 9.69897 1.15625 9.85366 1.15625 9.85366C1.15625 9.85366 1.42813 10.9927 2.31406 11.5974Z" fill="url(#paint20_linear_1159_66629)" />
                                <path d="M3.96406 14.4334C4.9625 14.8225 6.05469 14.41 6.05469 14.41C6.05469 14.41 5.52969 13.3647 4.53594 12.9756C3.5375 12.5866 2.44531 12.9991 2.44531 12.9991C2.44531 12.9991 2.96562 14.0444 3.96406 14.4334Z" fill="url(#paint21_linear_1159_66629)" />
                                <path d="M6.57656 16.8086C7.65 16.7804 8.49375 15.9742 8.49375 15.9742C8.49375 15.9742 7.60312 15.2148 6.53437 15.2429C5.46562 15.2711 4.61719 16.0773 4.61719 16.0773C4.61719 16.0773 5.50781 16.8367 6.57656 16.8086Z" fill="url(#paint22_linear_1159_66629)" />
                                <path d="M2.5625 5.55C2.5625 6.62344 3.34531 7.49063 3.34531 7.49063C3.34531 7.49063 4.12812 6.62344 4.12812 5.55C4.12812 4.47656 3.34531 3.60938 3.34531 3.60938C3.34531 3.60938 2.5625 4.47656 2.5625 5.55Z" fill="url(#paint23_linear_1159_66629)" />
                                <path d="M13.1624 2.50723L14.2311 4.54629L16.5046 4.93067C17.5499 5.10879 17.9671 6.38848 17.2265 7.14317L15.614 8.79317L15.9468 11.0713C16.1015 12.1213 15.014 12.9088 14.0624 12.44L11.9999 11.4229L9.93739 12.4447C8.98583 12.9135 7.89833 12.126 8.05301 11.076L8.38583 8.79785L6.77333 7.14785C6.0327 6.38848 6.44989 5.11348 7.4952 4.93535L9.76864 4.55098L10.8374 2.51192C11.3296 1.56973 12.6702 1.56973 13.1624 2.50723Z" fill="url(#paint24_linear_1159_66629)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1159_66629" x1="11.9995" y1="15.3133" x2="11.9995" y2="11.283" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FCD34F" />
                                        <stop offset="1" stop-color="#FF6A00" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1159_66629" x1="11.9996" y1="15.0277" x2="11.9996" y2="17.0405" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FCD34F" />
                                        <stop offset="1" stop-color="#FF6A00" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1159_66629" x1="12" y1="19.6174" x2="12" y2="17.0393" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3D5969" />
                                        <stop offset="1" stop-color="#698999" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1159_66629" x1="12" y1="22.1955" x2="12" y2="19.6174" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_1159_66629" x1="17.2748" y1="5.88003" x2="17.2748" y2="16.6368" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_1159_66629" x1="21.9299" y1="9.48995" x2="21.9307" y2="7.01531" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_1159_66629" x1="19.3294" y1="9.50018" x2="19.33" y2="6.32249" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_1159_66629" x1="18.5987" y1="12.0167" x2="18.7222" y2="8.738" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_1159_66629" x1="17.5521" y1="14.4038" x2="17.5512" y2="10.601" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_1159_66629" x1="15.9161" y1="15.9712" x2="15.9148" y2="12.1729" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_1159_66629" x1="21.208" y1="12.1049" x2="21.2956" y2="9.77987" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_1159_66629" x1="19.7291" y1="14.5847" x2="19.7297" y2="12.79" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint12_linear_1159_66629" x1="17.451" y1="16.8343" x2="17.4505" y2="15.2652" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint13_linear_1159_66629" x1="20.6496" y1="7.48898" x2="20.6496" y2="3.60867" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint14_linear_1159_66629" x1="6.72422" y1="5.88003" x2="6.72422" y2="16.6368" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint15_linear_1159_66629" x1="2.06977" y1="9.48964" x2="2.06908" y2="7.015" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint16_linear_1159_66629" x1="4.67003" y1="9.49996" x2="4.6694" y2="6.3223" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint17_linear_1159_66629" x1="5.40027" y1="12.0169" x2="5.27684" y2="8.73819" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint18_linear_1159_66629" x1="6.44695" y1="14.404" x2="6.44789" y2="10.6013" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint19_linear_1159_66629" x1="8.08384" y1="15.9716" x2="8.0851" y2="12.1733" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint20_linear_1159_66629" x1="2.79039" y1="12.1051" x2="2.7028" y2="9.78012" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint21_linear_1159_66629" x1="4.26904" y1="14.5844" x2="4.26841" y2="12.7897" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint22_linear_1159_66629" x1="6.54897" y1="16.8345" x2="6.54946" y2="15.2654" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint23_linear_1159_66629" x1="3.34766" y1="7.48898" x2="3.34766" y2="3.60867" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="1" stop-color="#FCD34F" />
                                    </linearGradient>
                                    <linearGradient id="paint24_linear_1159_66629" x1="11.9997" y1="12.5846" x2="11.9997" y2="1.80373" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF9900" />
                                        <stop offset="0.11" stop-color="#FFA200" />
                                        <stop offset="0.37" stop-color="#FFB300" />
                                        <stop offset="0.65" stop-color="#FFBD00" />
                                        <stop offset="1" stop-color="#FFC100" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                Winning Prize Pool <span className='font-bold'>A$ 50,000</span></p>
                        </div>

                    </div>
                    <div className='card-player-list-all'>
                        <h3 className='player-title'>Players (51)</h3>
                        <div className='grid-player-list'>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg1} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg2} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg3} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg4} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg5} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='player-list-eliminated'>
                                <div className='d-flex eliminated-wrapper'>
                                    <div className='playerImg-eliminated'>
                                        <Image src={EliminatedImg6} alt='' />
                                    </div>
                                    <div className='player-info-detail d-flex'>
                                        <div className='me-auto'>
                                            <h4>david232</h4>
                                            <p className='mb-0'>Eliminated on 22-10-2025</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <h4>4R</h4>
                                            <p className='mb-0'>Survived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Leaderboards
