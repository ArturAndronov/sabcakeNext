import React, {FC} from 'react'
import images from "@/assets/image";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {FooterBoxImg, LinkBoxFooter} from "@/components/common/Footer/style";
import Link from "@mui/material/Link";


const Footer: FC = () => {
    return (
        <>
            <Box style={{
                backgroundColor: '#000',
                width: '100%',
                height: '408px',
            }}>
                <Box style={{
                    padding: "85px 250px"

                }}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: "space-between"
                    }}>
                        <Box>
                            <Image src={images.logowhite} alt="logo" width={290}/>
                            <Typography style={{
                                color: 'white',
                                fontFamily: 'Poppins',
                                fontSize: "14px",
                                lineHeight: "21px",
                                paddingTop: '10px'
                            }}>Will make you and your loved ones get a gastronomic pleasure</Typography>
                            <FooterBoxImg>
                                <Link href="https://www.instagram.com/sab_icake/">
                                    <Image src={images.instagram} alt="instagram"/>
                                </Link>
                                <Link href="/">
                                    <Image src={images.facebook} alt="facebook"/>
                                </Link>
                                <Link href="https://wa.me/972585001993">
                                    <Image src={images.whatsapp} alt="whatsapp"/>
                                </Link>
                            </FooterBoxImg>
                        </Box>
                        <LinkBoxFooter>
                            <Typography style={{
                                fontWeight: "600",
                                fontSize: "18px",
                                lineHeight: "27px",
                                paddingBottom: '5px'
                            }}>
                                Support
                            </Typography>
                            <Link href="/">
                                Account
                            </Link>
                            <Link href="/">
                                Support
                            </Link>
                            <Link href="/">
                                Feedback
                            </Link>
                        </LinkBoxFooter>
                        <Box>
                            <LinkBoxFooter>
                                <Typography style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    lineHeight: "27px",
                                    paddingBottom: '5px'
                                }}>
                                    Quck Links
                                </Typography>
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
                            </LinkBoxFooter>
                        </Box>
                        <Box>
                            <Box style={{
                                color: '#fff',
                            }}>
                                <Typography style={{
                                    fontWeight: "600",
                                    fontSize: "18px",
                                    lineHeight: "27px",
                                    paddingBottom: '5px'
                                }}>
                                    Contact Us
                                </Typography>
                                <Typography style={{
                                    paddingBottom: '17px'
                                }}>
                                    Israel, Haifa
                                </Typography>
                                <Typography>
                                    Phone: +972 58-500-1993
                                </Typography>
                                <Typography>
                                    Email: team@icelab.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Typography style={{
                            color: '#fff',
                            paddingTop: '50px'
                        }}>
                            SabCake © 2023 .All Rights Reserved.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer;