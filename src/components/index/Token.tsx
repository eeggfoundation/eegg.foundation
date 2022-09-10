import clsx from 'clsx'
import { CircleBackground } from '@/components/ui/CircleBackground'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { tokenomics } from '@/content'

export function Token() {
    return (
        <section
            id="token"
            className="relative overflow-hidden bg-black py-20 sm:py-28"
        >
            <div className="absolute top-36 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <CircleBackground color="#fff" className="animate-spin-slower" />
            </div>
            <Container className="relative">
                <div className="flex flex-col space-y-16">
                    <div className="mx-auto max-w-md sm:text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                            EEGG Token
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Do not you see your EEGG Tokens in your wallet?
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Button href="/token/register-to-wallet" variant="dark" className="text-2xl">
                                Register EEGG Token to your wallet
                            </Button>
                        </div>
                    </div>
                    <div className="mx-auto max-w-3xl sm:text-center">
                        <p className="text-lg text-gray-300">
                            EEGG Token is the central driver of the EEGG Foundation.
                        </p>
                        <p className="text-lg text-gray-300 mt-3">
                            The token will provide its owners with a share of the transaction fees that the EEGG Foundation will receive from providing
                            the technology for the sale of EEGG objects. In addition to appreciation, the ownership of EEGG tokens provides its owner
                            with the possibility of &quot;governance&quot; of the EEGG Foundation project. For example, the right to influence the
                            development and final form of EEGG Smart Contracts, which determine the parameters of the sale of EEGG works, with your vote.
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                            Tokenomics
                        </h2>
                        <table className="table-fixed w-full mt-8 bg-gray-900 text-slate-400 whitespace-nowrap">
                            <tbody>
                                {tokenomics.map(({label, percent, value}, idx) => (
                                    <tr key={label} className={clsx('hover:bg-gray-800', idx > 0 && 'border-t border-t-slate-600')}>
                                        <td className="w-1/2 text-left py-3 pl-2">
                                            {label}
                                        </td>
                                        <td className="w-1/4 font-bold font-mono text-right py-3 pr-4">
                                            {percent}<span className="text-xs">%</span>
                                        </td>
                                        <td className="w-1/4 font-bold font-mono text-white text-right py-3 pr-2">
                                            {value} <span className="text-xs">EEGG</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    )
}
