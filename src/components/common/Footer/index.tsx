import React, {FC} from 'react'
import images from "@/assets/image";
import Image from "next/image";
import {FooterContainer} from "@/components/common/Footer/style";
import Link from "@mui/material/Link";


const Footer: FC = () => {
    return (
        <>
            <FooterContainer>
                <div className='contentContainer'>
                    <div className='title'>
                        <Image src={images.logowhite} alt='logowhite'/>
                        <p>Experience the Korean gastronomy with Susans Table at the comfort of your home.</p>
                        <div className='socialmedia'>
                            <Link href="https://www.instagram.com/sab_icake/">
                                <Image src={images.instagram} alt="instagram"/>
                            </Link>
                            <Link href="/">
                                <Image src={images.facebook} alt="facebook"/>
                            </Link>
                            <Link href="https://wa.me/972585001993">
                                <Image src={images.whatsapp} alt="whatsapp"/>
                            </Link>
                        </div>
                    </div>
                    <div className='linkWrapper'>
                        <div className='link'>
                            <p>Support</p>
                            <Link href=''>
                                Account
                            </Link>
                            <Link href=''>
                                Support
                            </Link>
                            <Link href=''>
                                Feedback
                            </Link>
                        </div>
                        <div className='link'>
                            <p>Quck Links</p>
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/">
                                Gallery
                            </Link>
                            <Link href="/">
                                Shop
                            </Link>
                            <Link href="/">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className='contact'>
                        <span>Contact Us</span>
                        <p>
                            Israel, Haifa
                        </p>
                        <p>
                            Phone: +972 58-500-1993
                        </p>
                        <p>
                            Email: team@icelab.com
                        </p>
                    </div>
                </div>
                <div className='copyright'>
                    <p>SabCake © 2023 .All Rights Reserved.</p>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer;