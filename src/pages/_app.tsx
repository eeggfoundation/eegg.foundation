import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import {
    WagmiConfig,
    configureChains,
    createClient,
    mainnet,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { GTM_ID, pageview } from '@/lib/gtm'
import Wallet from '@/providers/Wallet'

import { ToastContainer, Slide } from 'react-toastify'

let providers = [
    publicProvider(),
]

if (process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
    providers.unshift(alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    }))
}

const { chains, provider, webSocketProvider } = configureChains([mainnet], providers)

const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: 'ergg.foundation',
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                qrcode: true,
            },
        }),
    ],
    provider,
    webSocketProvider,
})

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', pageview)
        return () => {
            router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])

    return (
        <>
            <Script
                id="gtag-base"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer', '${GTM_ID}');
                    `,
                }}
            />
            <WagmiConfig client={client}>
                <Wallet.Provider>
                    <Component {...pageProps} />
                </Wallet.Provider>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    transition={Slide}
                />
            </WagmiConfig>
        </>
    )
}

export default App
