import React, {FC} from 'react'
import {Box} from "@mui/material";
import images from "@/assets/image";
import Image from "next/image";

const BestProduct: FC = () => {
    return (
        <>
            <Box
                style={{
                backgroundColor: '#fff',
                height: '970px',
            }}>
                <Box style={{
                    display: 'flex',
                    width: '300px',
                    height: '300px'
                }}>
                    <Box style={{ flex: 1, position: 'relative' }}>
                        <Image  src={images.icesplash} alt="icesplash" width={440} height={400}/>
                    </Box>
                    <Box style={{ flex: 1, position: 'relative' }}>
                        <Image src={images.cakeItem5} alt="icesplash" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BestProduct;