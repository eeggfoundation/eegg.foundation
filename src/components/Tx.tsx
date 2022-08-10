import { CheckCircleIcon, ExclamationCircleIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import { classNames } from './../utils'

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
                <>
                    <svg className={classNames(icoCommonClassNames, 'animate-spin text-gray-500')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                </>
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
