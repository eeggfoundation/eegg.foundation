import artifact from '@/artifacts/EeggToken.json'

const token = {
    abi: <object[]> artifact.abi,
    addr: <Record<string, string>> {
        goerli: '0x38871DA43c4365Ddd39292d4B0Ed26eAA1C827d0',
    },
    image: 'https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-wallet-icon.png',
    roles: [
        { name: 'Admin', value: '0x00' },               // 0x0000000000000000000000000000000000000000000000000000000000000000
        { name: 'Pauser', value: 'PAUSER_ROLE' },       // 0x65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a
        { name: 'Upgrader', value: 'UPGRADER_ROLE' },   // 0x189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e3
    ],
    symbol: 'EEGG',
}

export default token
