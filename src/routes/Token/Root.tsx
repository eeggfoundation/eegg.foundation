import { Layout } from './../../components/Layout'

const Root = () => {
    const onRegisterToYourWallet = () => {

    }

    return (
        <Layout.CardsContainer>
            <Layout.Card>
                <div className="flex flex-col md:flex-row md:justify-between">
                    <h2>
                        EEGG Token
                    </h2>
                    <button onClick={onRegisterToYourWallet} className="app-btn">
                        Register to your Wallet
                    </button>
                </div>
            </Layout.Card>
        </Layout.CardsContainer>
    )
}

export default Root
