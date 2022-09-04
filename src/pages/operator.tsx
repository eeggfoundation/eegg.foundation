import Head from 'next/head'
import { useAccount } from 'wagmi'

import { Header } from '@/components/ui/Header'
import { useIsMounted } from '@/hooks'

export default function Operator() {
    const { address } = useAccount()
    const isMounted = useIsMounted()

    return (
        <>
            <Head>
                <title>Operator eegg.foundation</title>
            </Head>
            <Header />
            <main>
                <>
                    {isMounted && (
                        <>
                            {address ?? '---'}
                        </>
                    )}
                </>

            </main>
        </>
    )
}
