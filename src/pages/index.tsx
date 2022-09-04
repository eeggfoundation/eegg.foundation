import Head from 'next/head'

import {
    Footer,
    Header,
} from '@/components/ui'

import { Hero } from '@/components/index/Hero'
import { Features } from '@/components/index/Features'
import { Architecture } from '@/components/index/Architecture'
import { Token } from '@/components/index/Token'
import { Products } from '@/components/index/Products'

export default function Index() {
    return (
        <>
            <Head>
                <title>eegg.foundation</title>
            </Head>
            <Header />
            <main>
                <Hero />
                <Features />
                <Architecture />
                <Token />
                <Products />
            </main>
            <Footer />
        </>
    )
}
