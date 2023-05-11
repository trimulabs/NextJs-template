import { Chakraprovider } from '@chakra-ui/react';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
    return (

        <Chakraprovider theme={theme}>
            <Component {...pageProps} /></Chakraprovider>

    )
}