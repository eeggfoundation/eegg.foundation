import { Head, Html, Main, NextScript } from 'next/document'
import { GTM_ID } from '@/lib/gtm'

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

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eegg.foundation" />
                <meta property="og:title" content="EEGG foundation" />
                <meta property="og:image" content="https://eegg.foundation/social/1200x630.v1.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://eegg.foundation" />
                <meta property="twitter:title" content="EEGG foundation" />
                <meta property="twitter:image" content="https://eegg.foundation/social/400x400.v1.png" />
            </Head>
            <body className="font-sans flex h-full flex-col bg-stone-100">
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
