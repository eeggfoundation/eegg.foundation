import clsx from 'clsx'

import { Container } from '@/components/ui/Container'
import { products } from '@/content'

const Product = (props: {
    name: string,
    description: string,
    variant: string,
}) => {
    const variantStyles = {
        dark: {
            section: 'bg-gray-900 text-stone-100',
        },
        light: {
            section: 'bg-white text-gray-900',
        },
    }[props.variant == 'dark' || props.variant == 'light' ? props.variant : 'light']

    return (
        <section className={clsx(
            'flex flex-col space-y-2 overflow-hidden p-6 shadow-lg shadow-gray-900/5',
            variantStyles.section,
        )}>
            <h3 className="text-2xl">
                {props.name}
            </h3>
            <p>
                {props.description}
            </p>
        </section>
    )
}

export function Products() {
    return (
        <section
            id="products"
            aria-label="Products"
            className="py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl tracking-tight text-black font-bold">
                        Products
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        The EEGG Foundation covers two different products running on the Ethereum blockchain. Both products are closely related,
                        and one is based on the other. And both are offered free to the public as open source.
                    </p>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-2">
                        {products.map((product) => (
                            <Product key={product.name} {...product} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
