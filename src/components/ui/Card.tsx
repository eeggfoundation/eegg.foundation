import React from 'react'
import clsx from 'clsx'

export function CardLabel(props: React.PropsWithChildren) {
    return (
        <h3 className="text-xl px-2 lg:px-4 my-2">
            {props.children}
        </h3>
    )
}

export function Card(props: React.PropsWithChildren<{
    className?: string,
    label?: string,
}>) {
    return (
        <div className="w-full">
            {props.label && (
                <CardLabel>{props.label}</CardLabel>
            )}
            <div className={clsx('w-full bg-white border-2 border-gray-300 p-2 lg:p-4 shadow-sm', props.className)}>
                {props.children}
            </div>
        </div>
    )
}
