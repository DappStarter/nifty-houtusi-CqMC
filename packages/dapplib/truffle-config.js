require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture story dash still modify inflict end army genuine'; 
let testAccounts = [
"0xff96291ccbaaa690f349305cf6d281b9b58f6420f1e27bd8c14420fae449782e",
"0xc37e13d1d7553ca83b71e5033724128a36f219c8bd4787dd0ae9ed3773f3e518",
"0xc3efbf4fbbbd47a2d3fddc7fab2117bc5c6e96242370d4b9e48edecfa662476c",
"0x248ed033cf8ed59a18ce6f1a21a11a2861cffc6da4b9b4ac8b38d7fb99d20d67",
"0x7d0ba71db48256e1a9a896ba327fb51b8d95a4c78a7d54cb069a2f95528e0b93",
"0x0f68f1cbe968dd0a9a40e1e242ed49180aa90e7178296e47d1b56067cb097e64",
"0x7764cbf3dcd871da579721a9f29567e11358ff42ec49d18fc2106a385826043a",
"0xf255e8547ad90cd626ec93a7e46cf5f95fa106925bd4d2c45bf7ec0dc384f577",
"0xcb73886961455706c19eb9ca0ee34ce4e0f6ba6424d9ffac5e342674bf67e6f8",
"0x62bb2c053562248bf281dbb54f62de49e04fbe88f5a7d89c5e8d66a154129a59"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

