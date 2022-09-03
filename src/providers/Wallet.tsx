import React, {
    useEffect,
    useState,
} from 'react'
import {
    Connector,
    useAccount,
    useConnect,
    useDisconnect,
    useNetwork,
    useSwitchNetwork,
} from 'wagmi'
import { Token } from './../blockchain'
import logoDefault from './../assets/1x1-00000000.png'
import logoCoinbaseWallet from './../assets/cbw.png'
import logoMetaMask from './../assets/mm.png'
import logoWalletConnect from './../assets/wc.png'

interface API {
    isConnected: boolean,
    isConnecting: boolean,

    connect: (c: Connector) => void,
    disconnect: () => void,

    tokenAddr: string | undefined,

    walletAddr: string | undefined,
    chain: string | undefined,
    connector: Connector | undefined,
    pendingConnector: Connector | undefined,
    connectors: Connector[],
}

const defaultCtx = {
    isConnected: false,
    isConnecting: false,

    connect: () => {},
    disconnect: () => {},

    tokenAddr: undefined,

    walletAddr: undefined,
    chain: undefined,
    connector: undefined,
    pendingConnector: undefined,
    connectors: [],
}

const connectorLogo = (name: string) => {
    switch (name.toLowerCase()) {
        case 'coinbase wallet':
            return logoCoinbaseWallet
        case 'metamask':
            return logoMetaMask
        case 'walletconnect':
            return logoWalletConnect
    }

    return logoDefault
}

const Context = React.createContext<API>(defaultCtx)

const Provider = (props: React.PropsWithChildren) => {
    const account = useAccount()

    const { connect, connectors, isLoading: isConnecting, pendingConnector } = useConnect()

    const { disconnect } = useDisconnect()

    const network = useNetwork()

    const [ctx, setCtx] = useState<API>({
        ...defaultCtx,
        connect: (c) => {
            connect({ connector: c })
        },
    })

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, walletAddr: account.address ?? undefined }))
    }, [account.address])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, connectors: connectors, pendingConnector: pendingConnector }))
    }, [connectors, pendingConnector])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnected: account.isConnected }))
    }, [account.isConnected])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnecting: account.isConnecting || account.isReconnecting || isConnecting }))
    }, [account.isConnecting, account.isReconnecting, isConnecting])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, disconnect: disconnect }))
    }, [disconnect])

    useEffect(() => {
        setCtx(ctx => ({
            ...ctx,
            tokenAddr: network.chain && Token.addr.hasOwnProperty(network.chain.network)
                ? Token.addr[network.chain.network]
                : undefined,
            chain: network.chain && !network.chain.unsupported
                ? network.chain.name
                : undefined,
        }))
    }, [network.chain])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, connector: account.connector }))
    }, [account.connector])

    return (
        <Context.Provider value={ctx}>
            {props.children}
        </Context.Provider>
    )
}

const Consumer = (props: {children: (api:API) => React.ReactNode}) => {
    return (
        <Context.Consumer>
            {props.children}
        </Context.Consumer>
    )
}

const Connected = (props: React.PropsWithChildren) => {
    return (
        <Consumer>
            {({ isConnected, isConnecting, connect, connectors, pendingConnector }) => (
                <>
                    {isConnected ? (
                        <>{props.children}</>
                    ) : (
                        <div className="flex w-full justfify-center items-center min-h-[50vh]">
                            <div className="flex flex-col space-y-4 mx-auto">
                                <h2>Connect your wallet to continue</h2>
                                {connectors
                                    .filter((c) => c.ready)
                                    .map((c) => (
                                        <button
                                            key={c.id}
                                            onClick={() => { connect(c) }}
                                            className="app-btn"
                                            disabled={isConnecting}
                                        >
                                            <img src={connectorLogo(c.name)} className="w-6 h-6 mr-2" alt={c.name} />
                                            {!isConnecting && 'Connect '}
                                            {c.name}
                                            {isConnecting && pendingConnector?.id == c.id && ' is connecting'}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )}
                </>
            )}
        </Consumer>
    )
}

const ConnectedOnSupportedNetwork = (props: React.PropsWithChildren) => {
    const { chains, switchNetwork } = useSwitchNetwork()

    const isSupported = (chain: string) => {
        return Token.addr.hasOwnProperty(chain.toLowerCase())
    }

    return (
        <Connected>
            <Consumer>
                {({ chain }) => (
                    <>
                        {chain && isSupported(chain) ? (
                            <>{props.children}</>
                        ) : (
                            <div className="flex w-full justfify-center items-center min-h-[50vh]">
                                <div className="flex flex-col space-y-4 mx-auto">
                                    <p className="font-bold">
                                        Your are connected to {chain} network. Please switch to one where {Token.symbol} Token is deployed.
                                    </p>
                                    {switchNetwork && chains
                                        .filter((c) => Token.addr.hasOwnProperty(c.name.toLowerCase()))
                                        .map((c) => (
                                            <button
                                                key={c.id}
                                                onClick={() => { switchNetwork(c.id) }}
                                                className="app-btn"
                                            >
                                                {c.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </>
                )}
            </Consumer>
        </Connected>
    )
}

export default {
    Connected,
    ConnectedOnSupportedNetwork,
    Context,
    Consumer,
    Provider,
}
