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
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { ToastContainer, Slide } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './app.css'

import Wallet from './providers/Wallet'

import App from './App'
import Welcome from './routes/Welcome'
import Token from './routes/Token/Root'
import TokenRegisterToWallet from './routes/Token/RegisterToWallet/Root'
import Project from './routes/Project'
import Products from './routes/Products'
import Operator from './routes/Operator/Root'

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
        new WalletConnectConnector({
            chains,
            options: {
                qrcode: true,
            },
        })
    ],
    provider,
    webSocketProvider,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiConfig client={client}>
            <Wallet.Provider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Welcome />} />
                            <Route path="/token" element={<Token />} />
                            <Route path="/token/register-to-wallet" element={<TokenRegisterToWallet />} />
                            <Route path="/project" element={<Project />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/operator" element={<Operator />} />
                        </Route>
                    </Routes>
                </HashRouter>
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
            </Wallet.Provider>
        </WagmiConfig>
    </React.StrictMode>
)
