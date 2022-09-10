import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="EEGG Foundation enables the creation of a revolutionary new asset class on the Ethereum blockchain. Our mission is to bridge the worlds of analogue Art and digital technology by creating a new form of ownership distributed to artists, galleries, and collectors."
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=ibm-plex-sans:400,600" rel="stylesheet" />
            </Head>
            <body className="font-sans flex h-full flex-col bg-stone-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
