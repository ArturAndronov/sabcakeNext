import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import Link from "@mui/material/Link";

const CakePops: FC = () => {
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
                        Cake Pops
                    </Typography>

                    <Typography
                        style={{
                            padding: "25px 0px 105px 0px",
                            maxWidth: "566px",
                            fontWeight: "400",
                            fontSize: "18px"
                        }}>
                        Delicate biscuit with juicy filling, covered with Belgian chocolate with any decor of your
                        choice.
                    </Typography>
                    <CustomButton>
                        <Link href="/">
                            Order now
                        </Link>
                    </CustomButton>
                </Box>
                <Box>
                    <Image src={images.cakepops} alt='cakepops'/>
                </Box>
            </Box>
        </>
    )
}

export default CakePops;