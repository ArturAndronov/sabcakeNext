import React, {FC} from 'react';

import Layout from "@/components/common/Layout"

import {Box, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import images from "@/assets/image";
import Image from "next/image";
import SliderComponent from "@/components/ui/SliderComponent";


const theme = createTheme();
const AboutMe: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout title='About me'
                    description="best cake in Israel"
            >
                <Box style={{
                    backgroundImage: `url(${images.aboutme.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '753px',
                }}>
                    <Box style={{
                        padding: "115px 0px 0px 40px",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Box style={{
                            padding: "15px",
                            backgroundColor: `#D8CDCD`
                        }}>
                            <Image src={images.sabPhoto} alt='asfasf' height={500} width={430}/>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: 'column',
                                paddingLeft: "20px"
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
                                    paddingBottom: "25px"
                                }}
                            >
                                About me
                            </Typography>

                            <Typography
                                style={{
                                    padding: "25px 0px",
                                    width: "600px",
                                    color: "#fff",
                                    fontFamily: 'Quicksand',
                                    fontWeight: "500",
                                    fontSize: "18px",

                                }}>
                                My name is Sabina and I am a home pastry chef! Sweets have always been present
                                in my life and have been an integral part of it, looking back now,
                                I understand that cooking various dishes has always attracted and fascinated me,
                                with the birth of my son, the craving for making delicious ,
                                natural and homemade food has become even stronger,
                                my son has become my incentive to realize himself as a pastry chef, every New month of
                                his life
                                I was celebrating with a new cake and it was a small step on the way to a big dream.
                                With each new cake, my skills increased, and the desire to master new techniques and
                                processes grew,
                                the birth of my daughter only increased this interest, and moving to a new country
                                became one of the most
                                important stages for me in a new place, everything sparkled with new colors, new friends
                                and acquaintances appeared,
                                who inspired new achievements and pushed me to a new step- and so, step by step ,
                                I became who I am now, a home- made pastry chef with a great love for his work and big
                                dreams and plans for the future .
                            </Typography>
                        </Box>
                        <Box style={{
                            paddingLeft: "75px",
                            width: "600px",
                            display: "flex",
                            flexDirection: "row"
                        }}>
                           <SliderComponent />
                        </Box>
                    </Box>
                </Box>
            </Layout>
        </ThemeProvider>
    )
}

export default AboutMe;