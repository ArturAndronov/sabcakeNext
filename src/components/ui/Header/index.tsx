import React, {FC} from 'react';

import Layout from "@/components/common/Layout"
import {CustomButton} from "@/components/ui/Header/style";

import {Box, Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";

import images from '../../../assets/image'



const Header: FC = () => {
    console.log('images.BG', images.BG)
    return (
        <>
            <Layout title="Header" description="A sweet bite">
                <Box
                    style={{
                        backgroundImage: `url(${images.BG.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '1100px',
                    }}>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            padding: "430px 0px 0px 750px",

                        }}>
                        <Typography
                            style={{
                                borderBottom: "3px solid #C9A74D",
                                fontFamily: 'Rubik',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "96px",
                                lineHeight: "114px",
                                paddingBottom: "25px"
                            }}
                        >
                            A Sweet Bite
                        </Typography>

                        <Typography
                            style={{
                                padding: "25px 0px",
                                width: "650px",
                                fontWeight: "400",
                                fontSize: "24px"
                            }}>
                            Take it all in a single bite. Import the full demo content with a
                            single mouse click using the one-click import feature.
                        </Typography>
                        <CustomButton>
                            <Link href="/">
                                Take a bite
                            </Link>
                        </CustomButton>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Header;
