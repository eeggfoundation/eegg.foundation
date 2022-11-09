import Image from 'next/image'

import { Container } from '@/components/ui/Container'
import imgArchitecture from '@/images/architecture.png'

export function Architecture() {
    return (
        <section
            id="architecture"
            aria-label="Architecture"
            className="py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
                        The Architecture
                    </h2>
                </div>
                <div className="mx-auto max-w-4xl mt-8">
                    <Image src={imgArchitecture} className="w-full h-auto" alt="Architecture model" />
                </div>
            </Container>
        </section>
    )
}
