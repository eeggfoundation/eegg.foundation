import { CheckCircleIcon, ExclamationCircleIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { classNames } from './../utils'
import Spinner from './Spinner'

const Tx = (props: {
    error?: Error | null,
    isError?: boolean,
    isLoading?: boolean,
    hash?: string,
    network?: string,
}) => {
    const icoCommonClassNames = 'h-4 w-4 mr-1.5 mt-0.5 shrink-0'

    return (
        <span className="inline-flex w-full text-sm">
            {props.isLoading && (
                <Spinner className={icoCommonClassNames} />
            )}
            {(props.isError || props.error) && (
                <>
                    <ExclamationCircleIcon className={classNames(icoCommonClassNames, 'text-red-600')} />
                    <span className="app-err">{props.error?.message}</span>
                </>
            )}
            {props.hash && (
                <>
                    <CheckCircleIcon className={classNames(icoCommonClassNames, 'text-green-500')} />
                    {props.network && props.network ? (
                        <span className="grow truncate">
                            <a
                                href={`https://${props.network.toLowerCase()}.etherscan.io/tx/${props.hash}`}
                                className="inline-flex w-full"
                                target="_blank"
                            >
                                <span className="truncate">
                                    Tx:{props.hash}
                                </span>
                                <ExternalLinkIcon className="w-3 h-3 text-gray-400 ml-0.5" />
                            </a>
                        </span>
                    ) : (
                        <span className="grow truncate">
                            Tx:{props.hash}
                        </span>
                    )}
                </>
            )}
        </span>
    )
}

export default Tx
