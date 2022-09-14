import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import {
    Container,
    GitHubIcon,
} from '@/components/ui'
import {
    governor,
    token,
    wallet
} from '@/lib'

const navigation = {
    pages: [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/#features' },
        { label: 'Architecture', href: '/#architecture' },
        { label: 'Token', href: '/#token' },
        { label: 'Products', href: '/#products' },
    ],
}

export function Footer() {
    return (
        <footer className="bg-white text-xs mt-16 lg:mt-24 text-gray-500">
            <Container>
                <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                        {navigation.pages.map(({ label, href }) => (
                            <div key={label} className="px-5 py-2">
                                <Link href={href} className="hover:text-gray-900">
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </nav>
                    <div className="mt-8 flex justify-center space-x-6">
                        <div className="flex flex-col space-y-2 justify-center">
                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <span>EEGG Token Contract:</span>
                                <a href={`https://etherscan.io/token/${token.addr}`} target="_blank" rel="noopener noreferrer" className="font-mono underline hover:text-gray-900 inline-flex items-baseline space-x-1">
                                    <span>{token.addr}</span>
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <span>EEGG Governor Contract:</span>
                                <a href={`https://etherscan.io/token/${governor.addr}`} target="_blank" rel="noopener noreferrer" className="font-mono underline hover:text-gray-900 inline-flex items-baseline space-x-1">
                                    <span>{governor.addr}</span>
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <span>EEGG Wallet:</span>
                                <a href={`https://etherscan.io/address/${wallet.addr}`} target="_blank" rel="noopener noreferrer" className="font-mono underline hover:text-gray-900 inline-flex items-baseline space-x-1">
                                    <span>{wallet.addr}</span>
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                            </div>

                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <a href="https://github.com/eeggfoundation" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className="w-5 h-5 text-gray-500 hover:text-gray-900" />
                                </a>
                            </div>

                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <a href="/eegg-white-paper-2022-08-22-cz.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                                    White Paper (czech)
                                </a>
                            </div>
                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <a href="/eegg-white-paper-2022-08-22.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
                                    White Paper (english)
                                </a>
                            </div>

                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <a href="https://ipfs.io/ipfs/QmT119jqrHW7vqptE9bUQo5XQJDpQpQZSqrESnVnithyNx" target="_blank" rel="noopener noreferrer" className="inline-flex space-x-1 underline hover:text-gray-900">
                                    <span>Manifest (czech) @ IPFS</span>
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="inline-flex items-baseline space-x-2 justify-center">
                                <a href="https://ipfs.io/ipfs/QmQjrf4ajm4uq9PWVAhb6KfzawqwLpBnDxSv3Q7GhgU95h" target="_blank" rel="noopener noreferrer" className="inline-flex space-x-1 underline hover:text-gray-900">
                                    <span>Manifest (english) @ IPFS</span>
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-gray-400">
                        &copy; Copyright {new Date().getFullYear()} <a href="http://ifoundation.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">I, Foundation</a>. All rights reserved.
                        <br/>
                        <a href="mailto:eegg.foundation@gmail.com" className="underline hover:text-gray-900">eegg.foundation @ gmail.com</a>
                    </p>
                </div>
            </Container>
        </footer>
    )
}
