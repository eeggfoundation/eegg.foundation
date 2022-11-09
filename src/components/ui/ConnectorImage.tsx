import React from 'react'
import Image from 'next/image'

import logoDefault from '@/images/1x1-00000000.png'
import logoCoinbaseWallet from '@/images/wallets/cbw.png'
import logoMetamask from '@/images/wallets/mm.png'
import logoWalletConnect from '@/images/wallets/wc.png'

const src = (id: string) => {
    switch (id) {
        case 'coinbaseWallet':
            return logoCoinbaseWallet
        case 'metaMask':
            return logoMetamask
        case 'walletConnect':
            return logoWalletConnect
        default:
            return logoDefault
    }
}

export function ConnectorImage(props: { id: string, className?: string }) {
    return (
        <Image src={src(props.id)} className={props.className} alt={props.id} />
    )
}
