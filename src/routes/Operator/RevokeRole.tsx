import React from 'react'
import { toast } from 'react-toastify'
import { useContractWrite } from 'wagmi'
import { utils } from 'ethers'
import { useForm } from 'react-hook-form'
import Wallet from './../../providers/Wallet'
import { Token } from './../../blockchain'
import Tx from './../../components/Tx'

const RevokeRole = (props: React.PropsWithChildren<{tokenAddr: string}>) => {
    const { data, error, isError, isLoading, write } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'revokeRole',
        onSuccess: () => {
            toast.success('Revoked')
        },
    })

    const { handleSubmit, register } = useForm()

    const onSubmit = (data: any) => {
        write({
            recklesslySetUnpreparedArgs: [utils.id(data.role).toString(), data.addrOrName],
        })
    }

    return (
        <div className="flex flex-col border border-gray-300 p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label className="app-label">Role:</label>
                    <select {...register('role', {required:true})} className="app-select">
                        {Token.roles.map((role, idx) => (
                            <option key={idx} value={role.value}>{role.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="app-label">From:</label>
                    <input {...register('addrOrName', {required:true})} placeholder="0x.." className="app-input text-sm" />
                </div>
                <div>
                    <button type="submit" className="app-btn text-sm" disabled={!write || isLoading}>
                        Revoke
                    </button>
                </div>
            </form>
            <div className="mt-4">
                <Wallet.Consumer>
                    {({ chain }) => (
                        <Tx error={error} isError={isError} isLoading={isLoading} hash={data?.hash} network={chain} />
                    )}
                </Wallet.Consumer>
            </div>
        </div>
    )
}

export default RevokeRole
