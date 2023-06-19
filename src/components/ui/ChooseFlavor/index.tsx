import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import Link from "@mui/material/Link";
import {Translations} from "@/pages";
import {ImageContainer} from "@/components/ui/AboutMe/style";
interface ChooseFlavorProps {
    selectedLanguage: string;
    translations: Translations;
}
const ChooseFlavor: FC<ChooseFlavorProps> = ({selectedLanguage, translations }) => {
    const currentTranslations = translations[selectedLanguage];
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: '#FDFAF4',
                    height: '750px',
                }}>
                <ImageContainer>
                    <Image src={images.cakeItem2} alt='yourflavor'/>
                </ImageContainer>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        paddingRight: '225px'
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
                        {currentTranslations.titleChooseFlavor}
                    </Typography>

                    <Typography
                        style={{
                            padding: "25px 0px",
                            maxWidth: "700px",
                            fontWeight: "400",
                            fontSize: "18px"
                        }}>
                        {currentTranslations.descriptionChooseFlavor}
                    </Typography>
                    <CustomButton>
                        <Link href="/">
                            {currentTranslations.button}
                        </Link>
                    </CustomButton>
                </Box>
            </Box>
        </>
    )
}

export default ChooseFlavor;