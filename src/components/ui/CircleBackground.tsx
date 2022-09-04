import React from 'react'
import { useId } from 'react'
import clsx from 'clsx'

export function CircleBackground(props: React.PropsWithChildren<{
    className?: string,
    color: string,
    width?: number,
    height?: number,
}>) {
    let id = useId()

    return (
        <svg
            viewBox="0 0 558 558"
            width={props.width ?? 558}
            height={props.height ?? 558}
            fill="none"
            aria-hidden="true"
            className={clsx(props.className)}
        >
            <defs>
                <linearGradient
                    id={id}
                    x1="79"
                    y1="16"
                    x2="105"
                    y2="237"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={props.color} />
                    <stop offset="1" stopColor={props.color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                opacity=".2"
                d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                stroke={props.color}
            />
            <path
                d="M1 279C1 125.465 125.465 1 279 1"
                stroke={`url(#${id})`}
                strokeLinecap="round"
            />
        </svg>
    )
}

/*
export function CircleBackground({
    color,
    width = 558,
    height = 558,
    ...props
}) {
  let id = useId()

  return (
    <svg
      viewBox="0 0 558 558"
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          x1="79"
          y1="16"
          x2="105"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
        stroke={color}
      />
      <path
        d="M1 279C1 125.465 125.465 1 279 1"
        stroke={`url(#${id})`}
        strokeLinecap="round"
      />
    </svg>
  )
}
*/
