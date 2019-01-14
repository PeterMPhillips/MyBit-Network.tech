const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
/*
if (fs.existsSync('secrets.json')) {
  const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  ({ MNEMONIC } = secrets);
}

if (fs.existsSync('apiKey.json')) {
  const key = JSON.parse(fs.readFileSync('apiKey.json', 'utf8'));
  ({ INFURA_API_KEY } = key);
}
*/

//const MNEMONIC = process.env.MNEMONIC_PHRASE;
//const INFURA_API_KEY = process.env.INFURA_API_KEY;

if (fs.existsSync('mnemonic.json')) {
  var json = JSON.parse(fs.readFileSync('mnemonic.json', 'utf8'));
  var MNEMONIC = json.mnemonic;
  var INFURA_API_KEY = json.infura;
}

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6500000,
      gasPrice: 7000000000
    },
    coverage: {
      host: "localhost",
      port: 8555,
      network_id: "*",
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/"+INFURA_API_KEY)
      },
      network_id: 3,
      gas: 8000000
    },
    ethpm: {
      ipfs_host: "127.0.0.1",
      ipfs_protocol: "http",
      registry: "0x8011df4830b4f696cd81393997e5371b93338878",
      install_provider_uri: "https://ropsten.infura.io/truffle"
    }
  },
  mocha: {
    enableTimeouts: false,
    useColors:      true,
    bail:           false
  },
  solc: {
    optimizer: {
        enabled: true,
        runs:    200
    }
  },
  compilers: {
    solc: {
        version: "0.4.25"
    }
  }
  /*
  compilers: {
    solc: {
        version: "node_modules/solc"
    }
  }
  */
};
