import {FC} from 'react';

import Layout from "@/components/common/Layout"
import {Container, Grid, Box, Typography} from "@mui/material";

import images from '../../../assets/image'
import Image from "next/image";

const Header: FC = () => {
    return (
        <>
            <Layout title="Header" description="A sweet bite">
                <Box
                    style={{
                        backgroundImage: `url(${images.BG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <Container fixed>
                        <Grid container>
                            <Grid item md={6}>
                                <Typography
                                component='h1'
                                color='inherit'
                                gutterBottom
                                >
                                    Web
                                </Typography>
                                <Typography
                                    component='h5'
                                    color='inherit'
                                    gutterBottom
                                >
                                    asfasfasfaposfajsfopajspgfiojaspoighipauorghojaweofijawoeifjpoaiwjef
                                </Typography>
                                <Image src={images.BG} alt='asfasf' width={350} height={350}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Layout>
        </>
    )
}

export default Header;