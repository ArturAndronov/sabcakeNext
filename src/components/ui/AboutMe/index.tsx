import React, {FC} from 'react';

import Layout from "@/components/common/Layout"

import {Box, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import images from "@/assets/image";
import Image from "next/image";
import SliderComponent from "@/components/ui/SliderComponent";
import {Translations} from "@/pages";
import {ImageContainer} from "@/components/ui/AboutMe/style";

interface AboutMeProps {
    selectedLanguage: string;
    translations: Translations;
}

const theme = createTheme();
const AboutMe: FC<AboutMeProps> = ({selectedLanguage, translations}) => {
    const currentTranslations = translations[selectedLanguage];

    return (
            <Box id="portfolio" style={{
                display: 'flex',
                justifyContent : 'center',
                backgroundImage: `url(${images.aboutme.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '753px',
            }}>
                <Box style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <ImageContainer>
                        <Image
                            src={images.sab}
                            alt='MyPhoto'
                        />
                    </ImageContainer>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: 'column',
                        }}>
                        <Typography
                            style={{
                                color: "#fff",
                                borderBottom: "3px solid #C9A74D",
                                fontFamily: 'Rubik',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "36px",
                                lineHeight: "43px",
                                paddingBottom: '25px'
                            }}
                        >
                            {currentTranslations.titleAboutMe}
                        </Typography>

                        <Typography
                            style={{
                                maxWidth: "600px",
                                color: "#fff",
                                fontFamily: 'Quicksand',
                                fontWeight: "500",
                                fontSize: "18px",
                                paddingTop: '25px'
                            }}>
                            {currentTranslations.descriptionAboutMe}
                        </Typography>
                    </Box>
                    <Box style={{
                        maxWidth: "600px",
                        display: "flex",
                        flexDirection: "row"
                    }}>
                            <SliderComponent/>
                    </Box>
                </Box>
            </Box>
    )
}

export default AboutMe;