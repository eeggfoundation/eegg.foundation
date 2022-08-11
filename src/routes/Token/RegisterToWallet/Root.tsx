import { useState } from 'react'
import { Connector } from 'wagmi'
import { toast } from 'react-toastify'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { Token } from './../../../blockchain'
import Wallet from '../../../providers/Wallet'
import { Layout } from './../../../components/Layout'
import Egg from './../../../components/Egg'
import Spinner from './../../../components/Spinner'

const RegisterToWallet = () => {
    const [isRegistered, setIsRegistered] = useState(false)

    const [isInProgress, setIsInProgress] = useState(false)

    const onRegister = (connector: Connector | undefined, chain: string | undefined) => {
        if (!connector || !chain) {
            toast.error('Wallet not connected')
            return
        }

        const tokenAddr = Token.addr[chain.toLowerCase()] ?? undefined

        if (!tokenAddr) {
            toast.error(`No deployed Token address on chain: ${chain}`)
            return
        }

        if (!connector.watchAsset) {
            toast.error('Your wallet does not support watching assets.')
            return
        }

        setIsInProgress(true)
        connector.watchAsset({
            address: tokenAddr,
            image: Token.image,
            symbol: Token.symbol,
        })
            .then(() => {
                setIsRegistered(true)
            })
            .catch((err: Error) => {
                toast.error(err.message)
            })
            .finally(() => {
                setIsInProgress(false)
            })
    }

    return (
        <Layout.CardsContainer>
            <Layout.Card>
                <div className="md:max-w-xl mx-auto justify-center">
                    <Wallet.Consumer>
                        {({ connector, chain }) => (
                            <Wallet.ConnectedOnSupportedNetwork>
                                <>
                                    {isRegistered ? (
                                        <div className="text-center font-bold">
                                            <CheckCircleIcon className="w-12 h-12 mx-auto text-green-600" />
                                            <p className="mt-4">
                                                {Token.symbol} has been sucesfully register to your Wallet.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <p>
                                                Wallets see only registered tokens. For example, the most known assets, like ETH, are predefined in your wallet.
                                                You must add the {Token.symbol} Token to see your balance in your wallet.
                                            </p>
                                            <p className="mt-4">
                                                No drama is required; we made it simple. Just click the button below.
                                            </p>
                                            <button onClick={() => {onRegister(connector, chain)}} className="app-btn m-4" disabled={isInProgress}>
                                                {isInProgress ? (
                                                    <Spinner className="w-4 h-4" />
                                                ) : (
                                                    <span className="inline-flex items-center space-x-1">
                                                        <span>Click to add</span>
                                                        <Egg className="w-4 h-4" />
                                                        <span>{Token.symbol} to your Wallet</span>
                                                    </span>
                                                )}

                                            </button>
                                        </div>
                                    )}
                                </>

                            </Wallet.ConnectedOnSupportedNetwork>
                        )}
                    </Wallet.Consumer>
                </div>
            </Layout.Card>
        </Layout.CardsContainer>
    )
}

export default RegisterToWallet
