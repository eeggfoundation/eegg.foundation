import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Mark } from '@/components/Logo'

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
                            <NavLinks links={navRight} />
                    </div>
                </Container>
            </nav>
        </header>
    )
}
