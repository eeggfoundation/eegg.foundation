import Head from 'next/head'
//import { useAccount } from 'wagmi'

//import { Account, Connect, NetworkSwitcher } from '@/components'
//import { useIsMounted } from '@/hooks'

function Index() {
    //const isMounted = useIsMounted()
    //const { isConnected } = useAccount()

    return (
        <>
            <Head>
                <title>foo boo bar</title>
            </Head>
            <main className="bg-yellow-100">
                <h1>Foo</h1>
            </main>
        </>
    )
}

export default Index
