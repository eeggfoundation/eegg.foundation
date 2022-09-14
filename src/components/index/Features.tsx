import { Container } from '@/components/ui/Container'
import { features } from '@/lib'

export function Features() {
    return (
        <section
            id="features"
            aria-label="Features"
            className="bg-black py-20 sm:py-32"
        >
            <Container>
                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl text-gray-100 sm:text-4xl lg:leading-snug">
                            With the emergence of a blockchain revolution, we bring transparency, legal immutability,
                            and <span className="font-bold text-white">incentives never existed before</span>.
                        </h2>
                    </div>
                    <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-gray-900 px-2">
                                <dt>
                                    <p className="mt-5 text-lg font-bold leading-6 text-white">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-slate-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}
