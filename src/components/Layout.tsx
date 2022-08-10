import React from 'react'
import { classNames } from './../utils'

const CardsContainer = (props: React.PropsWithChildren<{className?: string}>) => {
    return (
        <div className="relative max-w-7xl mx-auto my-12">
            <div className={classNames('flex flex-col space-y-8', props.className ?? '')}>
                {props.children}
            </div>
        </div>
    )
}

const Card = (props: React.PropsWithChildren<{className?: string, label?: string}>) => {
    return (
        <div className="w-full">
            {props.label && (
                <h3 className="text-2xl px-2 lg:px-4 my-2">
                    {props.label}
                </h3>
            )}
            <div className={classNames('w-full bg-white border border-gray-100 p-2 lg:p-4', props.className ?? '')}>
                {props.children}
            </div>
        </div>

    )
}

const LayoutRoot = (props: React.PropsWithChildren) => {
    return (
        <>
            {props.children}
        </>
    )
}

export let Layout = Object.assign(LayoutRoot, {
    Card,
    CardsContainer,
})