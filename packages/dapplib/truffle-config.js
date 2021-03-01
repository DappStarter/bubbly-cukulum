require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name random stick huge hockey problem equal genre'; 
let testAccounts = [
"0x13d67ef91fe3d84dfc248ec9710fb8ec781f4294e12210047272217e8e779fa0",
"0x688e211b8504a61b505c36979d8811a3f0724feabaf28d59370b55efebaff53f",
"0xcf14aaa5bc99975ec3d6a642486544b6ffb3afb6414103f6295d5412c04e68a3",
"0xa568677e6f50864fb98fa27ec1efce15e4c8f4ecf159209559d292ae5f6ef28e",
"0xe41dde91b862d3ebd23ba93dc121096a34accf20f78591e3a92878fcf8227b04",
"0xf44f73942c50f6dd853b739f8898559ecc6a8c7ebfdcd1519b1fdb1dd00326f2",
"0xdfb8eaf96b57bf8f9c27227e16f7d1c5ef03520c355ad179f4906f8d4576a651",
"0xf444caebf4abb4821bc329a5b3d16d78e90427daf68bc6d443ba0f2eb8dbbc8a",
"0xafcd9e444743cba4b7728c60b07b3896f4d9c5146d97dea2504c007990516016",
"0x22cf61a1864c87cec116741a63180c5113aeb1cc8c5bac5e979af75f7c6cae92"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
