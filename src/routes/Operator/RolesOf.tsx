import { useMemo, useState } from 'react'
import { useContractRead } from 'wagmi'
import { utils } from 'ethers'
import { useForm } from 'react-hook-form'
import { Token } from './../../blockchain'

const Result = (props: {
    tokenAddr: string,
    addrOrName: string,
    roleName: string,
    roleHash: string,
}) => {
    const { data, error, isError, isLoading } = useContractRead({
        addressOrName: props.tokenAddr,
        contractInterface: Token.abi,
        functionName: 'hasRole',
        args: [props.roleHash, props.addrOrName],
    })

    return (
        <div>
            {props.roleName}<br/>
            {props.roleHash}<br/>
            {data?.toString()}<br/>
        </div>
    )
}

const RolesOf = (props: {tokenAddr: string}) => {
    const { handleSubmit, register } = useForm()

    const [addrOrName, setAddrOrName] = useState(null)

    const onSubmit = (data: any) => {
        setAddrOrName(data.addrOrName)
    }

    return (
        <div className="flex flex-col border border-gray-300 p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-1">
                <div className="flex flex-col">
                    <label>Address or ENS:</label>
                    <input {...register('addrOrName', {required:true})} placeholder="0x.." className="app-input text-sm" />
                </div>
                <div>
                    <button type="submit" className="app-btn text-sm">
                        Resolve
                    </button>
                </div>
            </form>
            {addrOrName && (
                <div>
                    {Token.roles.map((role, idx) => (
                        <Result
                            key={idx}
                            tokenAddr={props.tokenAddr}
                            addrOrName={addrOrName}
                            roleName={role.name}
                            roleHash={utils.id(role.value)}
                        />
                    ))}

                </div>
            )}
        </div>
    )
}

export default RolesOf