import React, { useEffect, useState } from 'react'
import {
    Chain,
    Connector,
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
    useNetwork,
} from 'wagmi'

interface API {
    address: string | undefined
    ensName: string | undefined

    chain: Chain | undefined,
    connector: Connector | undefined

    isConnected: boolean
    isConnecting: boolean
}

const defaultCtx = {
    address: undefined,
    ensName: undefined,

    chain: undefined,
    connector: undefined,

    isConnected: false,
    isConnecting: false,
}

const Context = React.createContext<API>(defaultCtx)

const Provider = (props: React.PropsWithChildren) => {
    const { address, connector, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { isLoading: isConnecting } = useConnect()
    const { chain } = useNetwork()

    const [ctx, setCtx] = useState<API>(defaultCtx)

    useEffect(() => {
        setCtx(ctx => ({
            ...ctx,
            address: address ?? undefined,
            ensName: ensName ?? undefined,
            chain: chain ?? undefined,
            connector: connector ?? undefined,
            isConnected: isConnected,
            isConnecting: isConnecting,
        }))
    }, [address, ensName, chain, connector, isConnected, isConnecting])

    return (
        <Context.Provider value={ctx}>
            {props.children}
        </Context.Provider>
    )
}

const Consumer = (props: { children: (api:API) => React.ReactNode }) => {
    return (
        <Context.Consumer>
            {props.children}
        </Context.Consumer>
    )
}

const Wallet = {
    Consumer,
    Provider,
}

export default Wallet
