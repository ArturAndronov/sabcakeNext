import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createWrapper} from 'next-redux-wrapper'

import {Provider} from 'react-redux'
import {store} from './../redux/store'

import { appWithTranslation } from 'next-i18next';
import theme from "@/utils/muiTheme";
import {ThemeProvider} from "@mui/material/styles";


function App({Component, pageProps}: AppProps) {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    )
}

const wrapper = createWrapper(() => store)

export default wrapper.withRedux(appWithTranslation(App))
