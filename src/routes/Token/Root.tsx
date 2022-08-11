import { NavLink } from 'react-router-dom'
import { Token } from './../../blockchain'
import { Layout } from './../../components/Layout'
import Egg from './../../components/Egg'

const Root = () => {
    return (
        <Layout.CardsContainer>
            <Layout.Card>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <h2 className="inline-flex items-center">
                        <Egg className="w-12 h-12" />
                        <span className="ml-1">
                            {Token.symbol} Token
                        </span>
                    </h2>
                    <NavLink to="/token/register-to-wallet" className="app-btn">
                        Register to your Wallet
                    </NavLink>
                </div>
            </Layout.Card>
        </Layout.CardsContainer>
    )
}

export default Root
