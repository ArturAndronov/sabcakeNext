import React, {FC, useState} from 'react';

import Layout from "@/components/common/Layout"
import {CustomButton} from "@/components/ui/Header/style";

import {Box, Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";

import images from '../../../assets/image'

import { Translations } from './../../../pages/index';

interface HeaderProps {
    selectedLanguage: string;
    translations: Translations;
}

const Header: FC<HeaderProps> = ({selectedLanguage, translations }) => {
    const currentTranslations = translations[selectedLanguage];

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
                            {currentTranslations.titleHeader}
                        </Typography>

                        <Typography
                            style={{
                                padding: "25px 0px",
                                maxWidth: "650px",
                                fontWeight: "400",
                                fontSize: "24px"
                            }}>
                            {currentTranslations.descriptionHeader}
                        </Typography>
                        <CustomButton>
                            <Link href="/">
                                {currentTranslations.buttonHeader}
                            </Link>
                        </CustomButton>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Header;
