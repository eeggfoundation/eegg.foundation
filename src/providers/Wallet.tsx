import React, {
    useEffect,
    useState,
} from 'react'
import {
    useAccount,
    useNetwork,
} from 'wagmi'
import { Token } from './../blockchain'

interface API {
    isConnected: boolean,
    isConnecting: boolean,

    tokenAddr: string | undefined,

    walletAddr: string | undefined,
    chain: string | undefined,

    //toggle: () => void,
}

const defaultCtx = {
    isConnected: false,
    isConnecting: false,

    tokenAddr: undefined,

    walletAddr: undefined,
    chain: undefined,
}


const Context = React.createContext<API>(defaultCtx)

const Provider = (props: React.PropsWithChildren) => {
    /*
    const onCtxToggle = () => {
        setCtx(ctx => ({
            ...ctx,
            isConnected: !ctx.isConnected,
        }))
    }
    */

    const [ctx, setCtx] = useState<API>({
        ...defaultCtx,
        //toggle: onCtxToggle,
    })

    const account = useAccount()

    const network = useNetwork()

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, walletAddr: account.address ?? undefined }))
    }, [account.address])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnected: account.isConnected }))
    }, [account.isConnected])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnecting: account.isConnecting || account.isReconnecting }))
    }, [account.isConnecting, account.isReconnecting])

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

const WithSupportedNetworks = (props: React.PropsWithChildren) => {
    return (
        <>
            {props.children}
        </>
    )
}

export default {
    Context,
    Consumer,
    Provider,
    WithSupportedNetworks,
}