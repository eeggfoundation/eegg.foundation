import React from 'react'
import Wallet from '../../providers/Wallet'
import { Layout } from '../../components/Layout'

import Info from './Info'

const Operator = () => {
    return (
        <Layout.CardsContainer>
            <Wallet.Consumer>
                {({ isConnected }) => (
                    <>
                        {isConnected ? (
                            <Layout.Card label="Token Info">
                                <Info />
                            </Layout.Card>
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

export default Operator
