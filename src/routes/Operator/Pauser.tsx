import { utils } from 'ethers'
import {
    useContractRead,
    useContractWrite,
} from 'wagmi'
import { toast } from 'react-toastify'
import { Token } from './../../blockchain'
import { Layout } from './../../components/Layout'
import Spinner from './../../components/Spinner'

const Pauser = (props: {tokenAddr: string, addrOrName: string}) => {
    const {
        data: isAdminData,
        error: isAdminError,
        isError: isAdminIsError,
        isLoading: isAdminIsLoading,
    } = useContractRead({
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'hasRole',
        args: [utils.id('0x00'), props.addrOrName],
    })

    const {
        isLoading: pauseIsLoading,
        write: pauseWrite,
    } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'pause',
        onError: (err) => {
            toast.error(err.message)
        },
        onSuccess: () => {
            toast.success('Executed')
        },
    })

    const {
        isLoading: resumeIsLoading,
        write: resumeWrite,
    } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'unpause',
        onError: (err) => {
            toast.error(err.message)
        },
        onSuccess: () => {
            toast.success('Executed')
        },
    })

    const onPause = () => {
        pauseWrite()
    }

    const onResume = () => {
        resumeWrite()
    }

    return (
        <>
            {!isAdminIsLoading && !isAdminIsError && !isAdminError && isAdminData && (
                <Layout.Card label="Token Operations Pause/Resume">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2">
                            <h4 className="px-4">Grant</h4>
                            <div className="w-full p-2">
                                <div className="border border-gray-300 p-2">
                                    <p className="text-sm text-red-600">
                                        <span className="font-bold">Warning: </span>
                                        Once paused, no write operation will be allowed to anyone (like transferring tokens, granting or revoking roles, etc.).
                                        Read functions will remain to work. Token operations can be paused only when running. Trying to halt already paused
                                        operations will cause an error.
                                    </p>
                                    <button
                                        onClick={onPause}
                                        className="app-btn-danger text-sm m-auto my-4"
                                        disabled={pauseIsLoading || !pauseWrite}
                                    >
                                        Pause
                                        {pauseIsLoading && (
                                            <Spinner className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h4 className="px-4">Revoke</h4>
                            <div className="w-full p-2">
                                <div className="border border-gray-300 p-2">
                                    <p className="text-sm text-red-600">
                                        <span className="font-bold">Warning: </span>
                                        Resuming operations will allow anyone to execute any transaction on the Token. Token functions can be renewed only
                                        when paused. Trying to run already running operations will cause an error.
                                    </p>
                                    <button
                                        onClick={onResume}
                                        className="app-btn-danger text-sm m-auto my-4"
                                        disabled={resumeIsLoading || !resumeWrite}
                                    >
                                        Resume
                                        {resumeIsLoading && (
                                            <Spinner className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout.Card>
            )}
        </>
    )
}

export default Pauser
