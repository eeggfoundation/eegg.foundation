import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import {
    WagmiConfig,
    configureChains,
    createClient,
    defaultChains,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

let providers = [
    publicProvider(),
]

if (process.env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
    providers.unshift(alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    }))
}

const { chains, provider, webSocketProvider } = configureChains(defaultChains, providers)

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
    return (
        <WagmiConfig client={client}>
            <Component {...pageProps} />
        </WagmiConfig>
    )
}

export default App
