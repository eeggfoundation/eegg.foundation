import Head from 'next/head'
//import { useAccount } from 'wagmi'

//import { Account, Connect, NetworkSwitcher } from '@/components'
//import { useIsMounted } from '@/hooks'

import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/index/Hero'

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
            </main>
        </>
    )
}
