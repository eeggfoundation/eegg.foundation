import React from 'react'
import Wallet from '../../providers/Wallet'
import { Layout } from '../../components/Layout'

import Info from './Info'
import RolesOf from './RolesOf'
import GrantRole from './GrantRole'
import RevokeRole from './RevokeRole'

const Root = () => {
    return (
        <Layout.CardsContainer>
            <Wallet.Consumer>
                {({ isConnected, tokenAddr }) => (
                    <>
                        {isConnected ? (
                            <>
                                {tokenAddr && (
                                    <>
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
                                    </>
                                )}
                            </>
                        ) : (
                            <Layout.Card>
                                <p>
                                    Not connected
                                </p>
                            </Layout.Card>
                        )}
                    </>
                )}
            </Wallet.Consumer>
        </Layout.CardsContainer>
    )
}

export default Root
