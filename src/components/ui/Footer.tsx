import Link from 'next/link'
import { Container } from '@/components/ui/Container'

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
        <footer className="bg-white text-xs mt-16 lg:mt-24">
            <Container>
                <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                        {navigation.pages.map(({ label, href }) => (
                            <div key={label} className="px-5 py-2">
                                <Link href={href} className="text-gray-500 hover:text-gray-900">
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </nav>
                    {
                        /*
                        <div className="mt-8 flex justify-center space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        */
                    }
                    <p className="mt-8 text-center text-gray-400">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
