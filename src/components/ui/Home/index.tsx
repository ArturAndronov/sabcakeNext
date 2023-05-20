import {FC} from 'react';

import Layout from "@/components/common/Layout"
import {Box, Typography} from "@mui/material";
import {createTheme,ThemeProvider} from "@mui/material/styles";

const theme = createTheme();
const Home: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout title='Home'
                    description="best cake in Israel"
            >
                <Box style={{
                    backgroundColor: '#c4eff2',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                }}>
                    <Typography variant="h6" component="div">Home page</Typography>
                </Box>
            </Layout>
        </ThemeProvider>
    )
}

export default Home;