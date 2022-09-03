import { useMemo } from 'react'
import {
    useContractRead,
    useToken,
} from 'wagmi'
import { toast } from 'react-toastify'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { classNames, underscorefy } from './../../utils'
import { Token } from './../../blockchain'
import { Semaphore } from './../../components/Semaphore'
import Spinner from './../../components/Spinner'

const Info = (props: {tokenAddr: string}) => {
    const {
        data: pausedData,
        error: pausedError,
        isLoading: isPausedLoading,
        isError: isPausedError,
        refetch: pausedRefetch,
    } = useContractRead({
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'paused',
    })

    const {
        data: tokenData,
        error: tokenError,
        isLoading: isTokenLoading,
        isError: isTokenError,
    } = useToken({
        address: props.tokenAddr,
    })

    const [pausedSemaphoreState, pausedMsg] = useMemo(() => {
        if (isPausedLoading) {
            return [Semaphore.State.Unknown, 'Loading']
        }
        if (isPausedError) {
            return [Semaphore.State.Red, pausedError?.message ?? 'Something went wrong']
        }
        return pausedData
            ? [Semaphore.State.Red, 'Operations are temporarly paused']
            : [Semaphore.State.Green, 'Running']
    }, [pausedData, pausedError, isPausedLoading, isPausedError])

    const onRefresh = () => {
        pausedRefetch().then(() => {
            toast('👍🏻')
        })
    }

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <div className="inline-flex items-center space-x-2 px-2">
                    <Semaphore state={pausedSemaphoreState} className="w-4 h-4" />
                    <span>{pausedMsg}</span>
                </div>
                <div>
                    <ArrowPathIcon
                        onClick={onRefresh}
                        className={classNames('w-4 h-4', isPausedLoading ? 'animate-spin text-gray-400': 'cursor-pointer')}
                    />
                </div>
            </div>

            <div className="border border-gray-300 p-2">
                {(isPausedLoading || isTokenLoading) ? (
                    <Spinner className="w-4 h-4" />
                ) : (
                    <>
                        {(isPausedError || isTokenError) ? (
                            <p className="app-err">
                                {(pausedError || tokenError)?.message}
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <div className="border-r border-gray-300">
                                    <label>Symbol:</label>
                                    <p className="font-bold">{tokenData?.symbol}</p>
                                </div>
                                <div className="border-r border-gray-300">
                                    <label>Name:</label>
                                    <p className="font-bold">{tokenData?.name}</p>
                                </div>
                                <div>
                                    <label>Supply:</label>
                                    <p className="font-bold">{underscorefy(tokenData?.totalSupply.formatted ?? '?')}</p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Info
