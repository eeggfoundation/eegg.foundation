import { useState } from 'react'
import Head from 'next/head'
import {
    Chain,
    Connector,
    useDisconnect,
} from 'wagmi'
import { toast } from 'react-toastify'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

import { Account } from '@/components/ui/Account'
import { Header } from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Spinner } from '@/components/ui/Spinner'
import Wallet from '@/providers/Wallet'

import { token } from '@/content'

export default function RegisterToWallet() {
    const [isRegistering, setIsRegistering] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)

    const { disconnect } = useDisconnect()

    const onDisconnect = () => {
        disconnect()
    }

    const onRegister = (connector: Connector, chain: Chain) => {
        if (!connector.watchAsset) {
            toast.error('Your wallet does not support watching assets.')
            return
        }

        setIsRegistering(true)
        connector.watchAsset({
            address: token.addr,
            image: token.image,
            symbol: token.symbol,
        })
            .then(() => {
                setIsRegistered(true)
            })
            .catch((err: Error) => {
                toast.error(err.message)
            })
            .finally(() => {
                setIsRegistering(false)
            })
    }

    return (
        <>
            <Head>
                <title>Register Token to your wallet - eegg.foundation</title>
            </Head>
            <Header />
            <main>
                <Container>
                    <Wallet.Consumer>
                        {({ address, ensName, chain, connector, isConnected, isConnecting }) => (
                            <>
                                {isConnected ? (
                                    <div className="flex flex-col max-w-4xl space-y-8 mx-auto">
                                        <div>
                                            <p className="pl-4 py-2">
                                                Your wallet is connected.
                                            </p>
                                            <Account address={address} />
                                        </div>
                                        <div className="flex flex-col space-y-2 px-4">
                                            {isRegistered ? (
                                                <div className="inline-flex items-center">
                                                    <CheckCircleIcon className="w-12 h-12" />
                                                    <span className="ml-3">
                                                        {token.symbol} Token has been sucesfully register to your Wallet.
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    {isRegistering ? (
                                                        <div className="inline-flex items-center">
                                                            <Spinner className="w-8 h-8" />
                                                            <span className="ml-3">
                                                                Registering ..
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="flex flex-col space-y-2 max-w-2xl mb-4">
                                                                <p>
                                                                    Wallets see only registered tokens. For example, the most known assets, like ETH, are predefined in your wallet.
                                                                    You must add the {token.symbol} Token to see your balance in your wallet.
                                                                </p>
                                                                <p className="mt-4">
                                                                    No drama is required; we made it simple. Just click the button below.
                                                                </p>
                                                            </div>
                                                            <span onClick={() => onRegister(connector, chain)}>
                                                                <Button>
                                                                    Register EEGG Token to your Wallet
                                                                </Button>
                                                            </span>
                                                            <span onClick={onDisconnect}>
                                                                <Button>
                                                                    Disconnect Wallet
                                                                </Button>
                                                            </span>
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div>Connect</div>
                                )}
                            </>
                        )}
                    </Wallet.Consumer>
                </Container>
            </main>
        </>
    )
}
