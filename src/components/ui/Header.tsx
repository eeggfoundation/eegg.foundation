import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/ui/Container'
import { Mark } from '@/components/ui/Logo'

const NavLinks = ({ links }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <>
            {links.map(([label, href], index) => (
                <Link
                    key={label}
                    href={href}
                    className="font-bold relative -my-2 -mx-3 px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <>
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute inset-0 bg-white border-black border-2"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <span className="relative z-10">{label}</span>
                    </>
                </Link>
            ))}
        </>
    )
}

const MobileNavLink = (props: React.PropsWithChildren<{ href: string}>) => {
    return (
        <Popover.Button
            as={Link}
            className="block text-base leading-7 tracking-tight text-gray-700"
            href={props.href}
        >
            {props.children}
        </Popover.Button>
    )
}

export function Header() {
    const navLeft = [
        ['Architecture', '/#architecture'],
        ['Token', '/#token'],
        ['Products', '/#products'],
        ['FAQs', '/#faqs'],
    ]

    const navRight = [
        ['<Operator/>', '/operator'],
    ]

    return (
        <header>
            <nav>
                <Container className="relative z-50 flex justify-between py-8">
                    <div className="relative z-10 flex items-center gap-16">
                        <Link href="/" aria-label="Home">
                            <Mark className="h-10 w-auto" />
                        </Link>
                        <div className="hidden lg:flex lg:gap-10">
                            <NavLinks links={navLeft} />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Popover className="lg:hidden">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className="relative z-10 -m-2 inline-flex items-center stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                                        aria-label="Toggle site navigation"
                                    >
                                        {({ open }) =>
                                            open ? (
                                                <ChevronUpIcon className="h-6 w-6" />
                                            ) : (
                                                <Bars3Icon className="h-6 w-6" />
                                            )
                                        }
                                    </Popover.Button>
                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <>
                                                <Popover.Overlay
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                                                />
                                                <Popover.Panel
                                                    static
                                                    as={motion.div}
                                                    initial={{ opacity: 0, y: -32 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -32,
                                                        transition: { duration: 0.2 },
                                                    }}
                                                    className="absolute inset-x-0 top-0 z-0 origin-top bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                                                >
                                                    <div className="space-y-4">
                                                        {navLeft.concat(navRight).map(([label, href]) => (
                                                            <MobileNavLink key={label} href={href}>
                                                                {label}
                                                            </MobileNavLink>
                                                        ))}
                                                    </div>
                                                </Popover.Panel>
                                            </>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </Popover>
                        <div className="hidden lg:block">
                            <NavLinks links={navRight} />
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    )
}
