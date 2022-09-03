import React from 'react'
import { classNames } from './../utils'

const Section = (props: React.PropsWithChildren<{
    className?: string,
    label?: string,
    labelSide?: 'left' | 'right',
}>) => {
    return (
        <div className={classNames(props.className ?? '')}>
            <div className="flex mx-auto min-h-[50vh] justify-center">
                <div className="flex flex-col md:flex-row md:max-w-7xl m-auto py-12">
                    {props.label && (
                        <div className={classNames('w-1/4', props.labelSide && props.labelSide === 'right' ? 'order-last' : '')}>
                            <div className="flex md:bg-stone-200 pb-4 md:pb-8 lg:pb-12 md:-rotate-90 md:origin-bottom-right md:justify-end">
                                <div className="text-4xl md:text-5xl lg:text-7xl font-bold">
                                    {props.label}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={classNames('flex flex-col w-full', props.label ? 'md:w-3/4' : 'md:w-full')}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
