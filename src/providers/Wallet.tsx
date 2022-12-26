import React, { useEffect, useState } from 'react'
import {
    Chain,
    Connector,
    useAccount,
    useConnect,
    useEnsName,
    useNetwork,
} from 'wagmi'

import { Button, ConnectorImage } from '@/components/ui'
import { useIsMounted } from '@/hooks'

interface API {
    address: `0x${string}` | undefined
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

const ConnectWidget = () => {
    const isMounted = useIsMounted()
    const { connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

    return (
        <div className="flex flex-col space-y-2">
            {connectors
                .filter((x) => isMounted && x.ready && x.id !== connector?.id)
                .map((x) => (
                    <div key={x.id} onClick={() => connect({ connector: x })}>
                        <Button className="w-full">
                            <ConnectorImage id={x.id} className="w-6 h-6" />
                            <span className="ml-2">
                                {isLoading ? (
                                        <>
                                            {x.id === pendingConnector?.id ? (
                                                `${x.name} is connecting ..`
                                            ) : (
                                                `${x.name}`
                                            )}
                                        </>
                                    ) : (
                                        `Connect ${x.name}`
                                    )
                                }
                            </span>
                        </Button>
                    </div>
                ))
            }
        </div>
    )
}

const Wallet = {
    Consumer,
    Provider,

    ConnectWidget,
}

export default Wallet
