import Wallet from '../../providers/Wallet'
import { Layout } from '../../components/Layout'

import Info from './Info'
import RolesOf from './RolesOf'
import GrantRole from './GrantRole'
import RevokeRole from './RevokeRole'
import Pauser from './Pauser'

const Root = () => {
    return (
        <Layout.CardsContainer>
            <Wallet.ConnectedOnSupportedNetwork>
                <Wallet.Consumer>
                    {({ tokenAddr, walletAddr }) => (
                        <>
                            {tokenAddr && (
                                <>
                                    <Layout.Card label="Note">
                                        <div className="flex flex-wrap">
                                            <div className="p-2 md:w-1/2 lg:w-1/3">
                                                <span className="font-bold">Note: </span>
                                                Successful write transactions executed here (like Grant/Revoke roles) are pushed to the blockchain network.
                                                It does not mean they have already settled themselves. You have to wait for certain confirmations to see the desired change.
                                            </div>
                                            <div className="p-2 md:w-1/2 lg:w-1/3">
                                                <span className="font-bold">Tx: </span>
                                                Every successful transaction outputs its Tx hash as a clickable link to Etherscan, where you can see its confirmations and status.
                                            </div>
                                        </div>
                                    </Layout.Card>

                                    <Layout.Card label="Token Info">
                                        <div className="p-2">
                                            <Info tokenAddr={tokenAddr} />
                                        </div>
                                    </Layout.Card>
                                    <Layout.Card label="RolesOf">
                                        <RolesOf  tokenAddr={tokenAddr} />
                                    </Layout.Card>
                                    <Layout.Card label="Roles Grant/Revoke">
                                        <div className="flex flex-wrap">
                                            <div className="w-full md:w-1/2">
                                                <h4 className="px-4">Grant</h4>
                                                <div className="w-full p-2">
                                                    <GrantRole tokenAddr={tokenAddr} />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <h4 className="px-4">Revoke</h4>
                                                <div className="w-full p-2">
                                                    <RevokeRole tokenAddr={tokenAddr} />
                                                </div>
                                            </div>
                                        </div>
                                    </Layout.Card>

                                    {walletAddr && (
                                        <Pauser tokenAddr={tokenAddr} addrOrName={walletAddr} />
                                    )}
                                </>
                            )}
                        </>
                    )}
                </Wallet.Consumer>
            </Wallet.ConnectedOnSupportedNetwork>
        </Layout.CardsContainer>
    )
}

export default Root
