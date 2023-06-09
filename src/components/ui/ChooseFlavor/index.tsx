import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import Link from "@mui/material/Link";

const ChooseFlavor: FC = () => {
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
                <Box style={{}}>
                    <Image src={images.yourflavor} alt='yourflavor'/>
                </Box>
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
                        Choose Your Flavor
                    </Typography>

                    <Typography
                        style={{
                            padding: "25px 0px",
                            maxWidth: "700px",
                            fontWeight: "400",
                            fontSize: "18px"
                        }}>
                        Here you can independently assemble your ideal dessert that fully meets your preferences and
                        desires.
                    </Typography>
                    <CustomButton>
                        <Link href="/">
                            Order now
                        </Link>
                    </CustomButton>
                </Box>
            </Box>
        </>
    )
}

export default ChooseFlavor;