import Head from 'next/head'
//import { useAccount } from 'wagmi'

//import { Account, Connect, NetworkSwitcher } from '@/components'
//import { useIsMounted } from '@/hooks'

import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/index/Hero'
import { Features } from '@/components/index/Features'
import { Architecture } from '@/components/index/Architecture'
import { Token } from '@/components/index/Token'
import { Products } from '@/components/index/Products'

export default function Index() {
    //const isMounted = useIsMounted()
    //const { isConnected } = useAccount()

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
        </>
    )
}
