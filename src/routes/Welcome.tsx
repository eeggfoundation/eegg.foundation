import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-wrap w-full min-h-[75vh]">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                    The world of Art redefined through decentralization.
                </h1>
                <h2 className="mt-4 text-2xl lg:text-3xl lg:leading-normal">
                    <span className="font-bold">Eegg Foundation</span> facilitates the non-fungible tokenization
                    (<span className="font-bold">NFTs</span>) of physical assets
                    (<span className="font-bold">ROR</span>) on the Ethereum blockchain. Open source end to end protocol for artists,
                    galleries, action houses, anyone.
                </h2>
            </div>
            <div className="flex w-full md:w-1/2 items-end md:justify-end">
                <div className="flex flex-col space-y-4 md:text-2xl">
                    <div className="flex md:justify-end">
                        <NavLink to="/token" className="app-btn">
                            EEGG Token
                        </NavLink>
                    </div>
                    <div className="flex md:justify-end">
                        <NavLink to="/project" className="app-btn">
                            Project
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
    )
}

export default Welcome
