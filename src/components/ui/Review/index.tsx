import React, {FC} from 'react'
import images from "@/assets/image";
import {Box, Typography} from "@mui/material";
import CommentsSlider from "@/components/ui/CommentsSlider";

const Review: FC = () => {
    return (
        <>
            <Box style={{
                backgroundImage: `url(${images.review.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '713px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center"
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
                        Reviews
                    </Typography>
                   <CommentsSlider />
                </Box>
            </Box>
        </>
    )
}

export default Review;