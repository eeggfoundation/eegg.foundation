import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="flex flex-wrap w-full h-100 py-16">
            <div className="w-full md:w-2/3 md:pr-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
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
