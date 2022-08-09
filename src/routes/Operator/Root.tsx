import React from 'react'
import Wallet from '../../providers/Wallet'

const Operator = () => {
    return (
        <div>
            <Wallet.Consumer>
                {({ isConnected }) => (
                    <div>
                        <div>
                            {isConnected ? 'Connected' : 'Disconnected'}
                        </div>
                    </div>
                )}
            </Wallet.Consumer>
        </div>
    )
}

export default Operator
