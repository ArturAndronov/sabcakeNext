import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createWrapper} from 'next-redux-wrapper'

import {Provider} from 'react-redux'
import {store} from './../redux/store'

import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import theme from "@/utils/muiTheme";


function App({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(App)
