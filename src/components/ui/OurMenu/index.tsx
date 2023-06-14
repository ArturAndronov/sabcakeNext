import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import images from "@/assets/image";
import Image from "next/image";

import {CustomButtonOurMenu, LinkOurMenu} from "@/components/ui/OurMenu/style";
import {Translations} from "@/pages";

interface OurMenuProps {
    selectedLanguage: string;
    translations: Translations;
}

const OurMenu: FC<OurMenuProps> = ({selectedLanguage, translations}) => {
    const currentTranslations = translations[selectedLanguage];
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(${images.ourmenu.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '1157px',
                }}>
                <Box>
                    <Box style={{
                        paddingTop: "122px",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingBottom: '50px',
                                maxWidth: '620px'
                            }}>
                            <Typography
                                style={{
                                    borderBottom: "3px solid #C9A74D",
                                    color: "#fff",
                                    fontFamily: 'Rubik',
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "36px",
                                    lineHeight: "43px",
                                    paddingBottom: "25px",
                                    textAlign: "center"
                                }}
                            >
                                {currentTranslations.titleOurMenu}
                            </Typography>
                            <Typography
                                style={{
                                    paddingTop: '25px',
                                    fontFamily: 'Quicksand',
                                    color: "#fff",
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    textAlign: "center"
                                }}>

                                {currentTranslations.descriptionOurMenu}
                            </Typography>
                        </Box>
                    </Box>
                    <Box style={{
                        padding: '0px 260px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem2} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px',
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        {currentTranslations.OurMenuSnikersTitle}
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        {currentTranslations.OurMenuSkinkersDescription}
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem5} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        {currentTranslations.OurMenuMeringueTitle}
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        {currentTranslations.OurMenuMeringueDescription}
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem3} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        {currentTranslations.OurMenuHoneyTitle}
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        {currentTranslations.OurMenuHoneyDescription}
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem6} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        {currentTranslations.OurMenuCupcakeTitle}
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        {currentTranslations.OurMenuCupcakeDescription}
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                    </Box>
                    <Box style={{
                       display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <CustomButtonOurMenu>
                            <LinkOurMenu href="/">
                                {currentTranslations.button}
                            </LinkOurMenu>
                        </CustomButtonOurMenu>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default OurMenu;