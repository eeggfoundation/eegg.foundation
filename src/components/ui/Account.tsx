import { useBalance } from 'wagmi'
import { WalletIcon } from '@heroicons/react/24/outline'

import { ConnectorImage } from '@/components/ui/ConnectorImage'
import { token } from '@/content'
import Wallet from '@/providers/Wallet'

export function Account(props: { address: string }) {
    const { data: balance, error: balanceError } = useBalance({
        addressOrName: props.address,
        token: token.addr,
    })

    return (
        <Wallet.Consumer>
            {({ address, ensName, chain, connector, isConnected }) => (
                <>
                    {isConnected && connector && (
                        <div className="relative flex items-center space-x-3 border border-gray-300 bg-white p-2 shadow-sm overflow-hidden">
                            <div className="flex-shrink-0 border-r-2 border-gray-300">
                                <WalletIcon className="w-10 h-10 py-2" />
                            </div>
                            <div className="min-w-0 flex-1 text-sm text-gray-500">
                                <table className="table-auto">
                                    <tbody>
                                        <tr>
                                            <td className="text-right pr-1">Address:</td>
                                            <td className="text-gray-900">{ ensName ?? address }</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right pr-1">EEGG:</td>
                                            <td className="text-gray-900">
                                                { balance ? (
                                                    `${balance.formatted} ${balance.symbol}`
                                                ) : (
                                                    `${balanceError.message}`
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right pr-1">Connector:</td>
                                            <td className="inline-flex items-center truncate text-gray-900">
                                                <span>{connector.name}</span>
                                                <ConnectorImage id={connector.id} className="w-4 h-4 ml-1.5" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-right pr-1">Network:</td>
                                            <td className="text-gray-900">{chain.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </>
            )}
        </Wallet.Consumer>
    )
}
