import {useRouter} from 'next/router';
import '../css/App.css';

export default function MyApp({ Component, pageProps}){
    let router = useRouter();
    return <Component {...pageProps} router={router}/>
}