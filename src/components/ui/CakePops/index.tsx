import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import Link from "@mui/material/Link";
import {Translations} from "@/pages";
import {ImageContainer} from "@/components/ui/AboutMe/style";

interface CakePopsProps {
    selectedLanguage: string;
    translations: Translations;
}

const CakePops: FC<CakePopsProps> = ({selectedLanguage, translations}) => {
    const currentTranslations = translations[selectedLanguage];
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: '#fff',
                    height: '750px',
                }}>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        paddingLeft: '258px'
                    }}>
                    <Typography
                        style={{
                            borderBottom: "3px solid #C9A74D",
                            fontFamily: 'Rubik',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "36px",
                            lineHeight: "43px",
                            paddingBottom: "25px"
                        }}
                    >
                        {currentTranslations.titleCakePops}
                    </Typography>

                    <Typography
                        style={{
                            padding: "25px 0px 105px 0px",
                            maxWidth: "566px",
                            fontWeight: "400",
                            fontSize: "18px"
                        }}>
                        {currentTranslations.descriptionCakePops}
                    </Typography>
                    <CustomButton>
                        <Link href="/">
                            {currentTranslations.button}
                        </Link>
                    </CustomButton>
                </Box>
                <ImageContainer>
                    <Image src={images.cakepops} alt='cakepops'/>
                </ImageContainer>
            </Box>
        </>
    )
}

export default CakePops;