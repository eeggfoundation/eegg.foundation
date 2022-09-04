import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
    dark: 'bg-black text-white border-white hover:bg-white hover:text-black',
    light: 'bg-white text-black border-black hover:bg-black hover:text-white',
}

interface IButtonProps extends React.PropsWithChildren {
    className?: string,
    href?: string,
    variant?: 'dark' | 'light',
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(function Button(props, ref) {
    const className = clsx(
        'inline-flex py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.4)-1px)] border-4 outline-none transition-colors font-bold ease-in-out duration-300',
        variantStyles[props.variant ?? 'light'],
        props.className,
    )

    return props.href ? (
        <Link href={props.href} className={className}>
            {props.children}
        </Link>
    ) : (
        <button ref={ref} className={className}>
            {props.children}
        </button>
    )
})
