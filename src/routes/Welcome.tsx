import { NavLink } from 'react-router-dom'
import { Token } from './../blockchain'
import Section from './../components/Section'
import ImgArchitectureUrl from './../assets/architecture.png'

const Welcome = () => {
    return (
        <>
            <div className="flex flex-wrap w-full min-h-[85vh] py-16">
                <div className="w-full md:w-2/3 md:pr-4">
                    <h1>
                        The world of Art redefined through decentralization.
                    </h1>
                    <h2 className="mt-4 text-2xl lg:text-3xl lg:leading-normal lg:w-2/3">
                        <span className="font-bold">Eegg Foundation</span> facilitates the creation
                        of a&nbsp;revolutionary new asset class on the Ethereum blockchain. Our mission is to bridge the worlds of art
                        and technology by creating a new form of distributed ownership for galleries and artists.
                    </h2>
                </div>
                <div className="flex w-full md:w-1/3 pt-12 md:pt-0 items-end md:justify-end">
                    <div className="flex flex-col space-y-4 md:text-2xl">
                        <div className="flex md:justify-end">
                            <NavLink to="/token" className="app-btn">
                                EEGG Token
                            </NavLink>
                        </div>
                        <div className="flex md:justify-end">
                            <NavLink to="/project" className="app-btn">
                                Products
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Section
                className="border-t-2 border-gray-300"
                label="Architecture"
                labelSide="left"
            >
                <img src={ImgArchitectureUrl} className="w-full h-auto" />
            </Section>

            <Section
                className="border-t-2 border-gray-300"
                label="Roadmap"
                labelSide="right"
            >
                ...
            </Section>

            <Section
                className="border-t-2 border-gray-300 has-bg-grid"

            >
                <p className="text-2xl font-bold text-center">
                    Do not you see the {Token.symbol} Token in your Wallet?
                </p>
                <p className="text-center mt-4">
                    <NavLink to="/token/register-to-wallet" className="app-btn">
                        Register to your Wallet
                    </NavLink>
                </p>
            </Section>
        </>
    )
}

export default Welcome
