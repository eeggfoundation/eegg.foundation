import { useMemo } from 'react'
import clsx from 'clsx'

enum State {
    Unknown,
    Green,
    Orange,
    Red,
}

const SemaphoreRoot = (props: {state: State, className?: string}) => {
    const classColor = useMemo(() => {
        switch (props.state) {
            case State.Green:
                return 'text-green-600'
            case State.Red:
                return 'text-red-600'
            case State.Orange:
                return 'text-orange-400'
            default:
                return 'text-gray-400'
        }
    }, [props.state])

    const classPulse = useMemo(() => {
        return props.state == State.Green || props.state == State.Orange
            ? 'animate-pulse'
            : ''
    }, [props.state])

    return (
        <svg viewBox="0 0 24 24" className={clsx(classColor, props.className ?? '')}>
            <circle fill="currentColor" cx="12" cy="12" r="6" className={classPulse} />
            <circle fill="currentColor" fillOpacity="0.42" cx="12" cy="12" r="12"/>
        </svg>
    )
}

export let Semaphore = Object.assign(SemaphoreRoot, {
    State,
})
