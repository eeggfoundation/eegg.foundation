import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom'
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

import './app.css'
import App from './App'
import Welcome from './routes/Welcome'

let providers = [
    publicProvider(),
]

if (import.meta.env.VITE_ALCHEMY_API_KEY) {
    providers.unshift(alchemyProvider({
        apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
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
                appName: 'Eegg Foundation',
            },
        }),
    ],
    provider,
    webSocketProvider,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiConfig client={client}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Welcome />} />
                    </Route>
                </Routes>
            </HashRouter>
        </WagmiConfig>
    </React.StrictMode>,
)
