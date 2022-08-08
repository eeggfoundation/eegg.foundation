import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-wrap w-full min-h-[75vh]">
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                    The world of Art redefined through decentralization.
                </h1>
                <h2 className="mt-4 text-2xl lg:text-3xl lg:leading-normal">
                    <span className="font-bold">Eegg Foundation</span> facilitates the non-fungible tokenization of physical assets
                    on the Ethereum blockchain. Open source end to end protocol for artists,
                    galleries, action houses, anyone.
                </h2>
            </div>
            <div className="flex w-full md:w-1/2 items-end md:justify-end">
                <div className="flex flex-col space-y-4 md:text-xl">
                    <div className="flex md:justify-end">
                        <NavLink to="/token" className="app-btn">
                            EEGG Token
                        </NavLink>
                    </div>
                    <div className="flex md:justify-end">
                        <NavLink to="/features" className="app-btn">
                            Features
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
