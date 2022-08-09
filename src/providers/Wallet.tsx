import React, { useState } from 'react'

interface API {
    isConnected: boolean,
    toggle: () => void,
}

const Context = React.createContext<API>({
    isConnected: false,
    toggle: () => {
        console.log('dummy')
    },
})

const Provider = (props: React.PropsWithChildren) => {
    const onCtxToggle = () => {
        setCtx(ctx => ({
            ...ctx,
            isConnected: !ctx.isConnected,
        }))
    }

    const [ctx, setCtx] = useState<API>({
        isConnected: false,
        toggle: onCtxToggle,
    })

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