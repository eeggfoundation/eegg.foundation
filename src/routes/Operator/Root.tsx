import React from 'react'
import Wallet from '../../providers/Wallet'

const Operator = () => {
    return (
        <div>
            <Wallet.Consumer>
                {({ isConnected, toggle }) => (
                    <div>
                        <div>
                            {isConnected ? 'Connected' : 'Disconnected'}
                        </div>
                        <div>
                            <button onClick={toggle} className="app-btn">
                                Toggle
                            </button>
                        </div>
                    </div>
                )}
            </Wallet.Consumer>
            <Wallet.Consumer>
                {({ isConnected: isWalletConnected }) => (
                    <div>
                        {isWalletConnected ? 'true' : 'false'}
                    </div>
                )}
            </Wallet.Consumer>
        </div>
    )
}

export default Operator
