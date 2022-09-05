import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface IButtonProps extends React.PropsWithChildren {
    className?: string,
    disabled?: boolean,
    href?: string,
    variant?: 'dark' | 'light',
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(function Button(props, ref) {
    const className = clsx(
        'inline-flex py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.4)-1px)] border-4 outline-none transition-colors font-bold ease-in-out duration-300',
        props.className,
        props.variant && props.variant === 'dark'
            ? props.disabled
                ? 'bg-gray-600 text-gray-300 border-gray-700'
                : 'bg-black text-white border-white hover:bg-white hover:text-black'
            : props.disabled
                ? 'bg-gray-300 text-gray-600 border-gray-400'
                : 'bg-white text-black border-black hover:bg-black hover:text-white',
    )

    return props.disabled ? (
        <span className={className}>{props.children}</span>
    ) : (
        <>
            {props.href ? (
                <Link href={props.href} className={className}>
                    {props.children}
                </Link>
            ) : (
                <button ref={ref} className={className}>
                    {props.children}
                </button>
            )}
        </>
    )
})
