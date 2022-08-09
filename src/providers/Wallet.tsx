import React, {
    useEffect,
    useState,
} from 'react'
import {
    useAccount,
    useNetwork,
} from 'wagmi'

interface API {
    isConnected: boolean,
    isConnecting: boolean,

    addr: string | null,
    chain: string | null,

    //toggle: () => void,
}

const defaultCtx = {
    isConnected: false,
    isConnecting: false,

    addr: null,
    chain: null,
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
        setCtx(ctx => ({ ...ctx, addr: account.address ?? null }))
    }, [account.address])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnected: account.isConnected }))
    }, [account.isConnected])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, isConnecting: account.isConnecting || account.isReconnecting }))
    }, [account.isConnecting, account.isReconnecting])

    useEffect(() => {
        setCtx(ctx => ({ ...ctx, chain: network.chain && !network.chain.unsupported ? network.chain.name : null }))
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

export default {
    Context,
    Consumer,
    Provider,
}