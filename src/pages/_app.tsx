import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createWrapper, HYDRATE } from 'next-redux-wrapper'

import {Provider} from 'react-redux'
import {store} from './../redux/store'

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

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
