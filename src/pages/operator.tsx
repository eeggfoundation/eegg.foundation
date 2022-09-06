import { useMemo, useState } from 'react'
import Head from 'next/head'
import {
    useContractRead,
    useContractReads,
} from 'wagmi'
import { utils } from 'ethers'
import { useForm } from 'react-hook-form'
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    NoSymbolIcon,
} from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

import { token } from '@/content'
import {
    Account,
    Button,
    Card, CardLabel,
    Container,
    Footer,
    Header,
    Semaphore,
    Spinner,
} from '@/components/ui'
import { useIsMounted } from '@/hooks'
import Wallet from '@/providers/Wallet'

const NoteCard = () => {
    return (
        <Card label="Note">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-500">
                <div>
                    <span className="font-bold">Note: </span>
                    Successful write transactions executed here (like Grant/Revoke roles) are pushed to the blockchain network.
                    It does not mean they have already settled themselves. You have to wait for certain confirmations to see the desired change.
                </div>
                <div>
                    <span className="font-bold">Tx: </span>
                    Every successful transaction outputs its Tx hash as a&nbsp;clickable link to Etherscan, where you can see its confirmations and status.
                </div>
            </div>
        </Card>
    )
}

const TokenInfoCard = () => {
    const {
        data: pausedData,
        error: pausedError,
        isLoading: isPausedLoading,
        isError: isPausedError,
    } = useContractRead({
        addressOrName: token.addr,
        contractInterface: token.abi,
        functionName: 'paused',
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

    return (
        <Card label="EEGG Token">
            <div className="inline-flex items-center space-x-2">
                <Semaphore state={pausedSemaphoreState} className="w-6 h-6" />
                <span>{pausedMsg}</span>
            </div>
        </Card>
    )
}

const RolesOfResult = (props: {
    addr: string,
    onFinish: () => void,
}) => {
    const roles = ['Admin', 'Pauser', 'Upgrader']

    const query = {
        addressOrName: token.addr,
        contractInterface: token.abi,
        functionName: 'hasRole',
    }

    const { data, error, isError, isLoading } = useContractReads({
        contracts: [
            { ...query, args: [utils.id(token.roles.admin.value), props.addr] },
            { ...query, args: [utils.id(token.roles.pauser.value), props.addr] },
            { ...query, args: [utils.id(token.roles.upgrader.value), props.addr] },
        ],
        onError(err) {
            toast.error(err.message)
            console.error(err)
        },
        onSettled() {
            props.onFinish()
        },
    })

    return (
        <div className="flex flex-col w-full divide-y-2">
            <>
                {roles.map((role, idx) => (
                    <div key={idx} className="inline-flex items-center py-1">
                        {isLoading ? (
                            <Spinner className="w-4 h-4" />
                        ) : (
                            <>
                                {isError || data.length < idx + 1 ? (
                                    <ExclamationTriangleIcon className="w-4 h-4 text-red-600" />
                                ) : (
                                    <>
                                        {data[idx] ? (
                                            <CheckCircleIcon className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <NoSymbolIcon className="w-4 h-4" />
                                        )}
                                    </>
                                )}
                            </>
                        )}
                        <span className="ml-1 font-mono text-sm text-gray-700">
                            {role}
                        </span>
                        {isError && error && (
                            <span>{ error.message }</span>
                        )}
                    </div>
                ))}
            </>
        </div>
    )
}

const RolesOfCard = () => {
    const [ addr, setAddr ] = useState()
    const [ isBusy, setIsBusy ] = useState(false)

    const { handleSubmit, register } = useForm()

    const onSubmit = (data: any) => {
        console.log(data.addr, addr)
        if (data.addr == addr) {
            return
        }
        console.log(data)
        setAddr(data.addr)
        setIsBusy(true)
    }

    return (
        <Card label="Roles of a Wallet">
            <p className="text-gray-500 w-full md:w-2/3">
                Enter a wallet address (or ENS) and click the <span className="text-black font-bold">Resolve</span> button
                to discover which EEGG Token roles are granted to the given wallet.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-1 mt-4">
                <div className="flex flex-col">
                    <input {...register('addr', {required:true})} placeholder="0x.." className="app-input" />


                </div>
                <div>
                    <Button type="submit" disabled={isBusy}>
                        Resolve
                    </Button>
                </div>
                {addr && addr !== '' && (
                    <div className="pt-4 pb-2 px-2 bg-stone-100">
                        <RolesOfResult addr={addr} onFinish={() => { setIsBusy(false) }} />
                    </div>
                )}
            </form>
        </Card>
    )
}

export default function Operator() {
    const isMounted = useIsMounted()

    return (
        <>
            <Head>
                <title>Operator eegg.foundation</title>
            </Head>
            <Header />
            <main className="min-h-[75vh]">
                <Container>
                    {isMounted && (
                        <Wallet.Consumer>
                            {({ address }) => (
                                <div className="flex flex-col max-w-4xl space-y-8 mx-auto">
                                    <TokenInfoCard />
                                    <NoteCard />
                                    <div>
                                        <CardLabel>Your connected Wallet</CardLabel>
                                        <Account address={address} />
                                    </div>
                                    <RolesOfCard />
                                </div>
                            )}
                        </Wallet.Consumer>
                    )}
                </Container>
            </main>
            <Footer />
        </>
    )
}
