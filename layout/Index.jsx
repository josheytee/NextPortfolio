import React from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Index(props) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
                {/* <!--
                manifest.json provides metadata used when your web app is installed on a
                user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
                --> */}
                <link rel="manifest" href="/manifest.json" />
                {/* <!--
                Notice the use of %PUBLIC_URL% in the tags above.
                It will be replaced with the URL of the `public` folder during the build.
                Only files inside the `public` folder can be referenced from the HTML.

                Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                work correctly both with client-side routing and a non-root public URL.
                Learn how to configure a non-root public URL by running `npm run build`.
                --> */}
                <title>@josheytee</title>
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}