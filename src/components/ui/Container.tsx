import React from 'react'
import clsx from 'clsx'

export function Container(props: React.PropsWithChildren<{ className?: string}>) {
    return (
        <div
            className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', props.className)}
        >
            {props.children}
        </div>
    )
}
