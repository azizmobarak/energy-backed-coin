# Energy Backed Coin (EBC)

Welcome to the Energy Backed Coin (EBC) project! EBC is a blockchain-based token designed to support green energy initiatives.

### Overview

Energy Backed Coin (EBC) is an ERC20 token on the Ethereum blockchain. It aims to promote and invest in green energy projects by leveraging blockchain technology.

### Features

- **ERC20 Compliant:** Fully compatible with ERC20 standards.
- **Green Energy Focus:** Supports and incentivizes renewable energy projects.
- **Decentralized:** Operates on the Ethereum blockchain ensuring transparency.

### Usage

## Interacting with the Contract

You can interact with the EBC smart contract using various Ethereum tools and libraries.

## Example Code

Here’s an example of how to interact with EBC using Web3.js:

```javascript
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contractABI = [ /* ABI Array */ ];
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Get the token name
contract.methods.name().call().then(console.log);
```

## Contract Details

- **Contract Address:** `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- **Token Name:** Energy Backed Coin
- **Token Symbol:** EBC

## Verification

The EBC contract has been verified on Etherscan. View the verified contract [here](https://etherscan.io/address/0x5FbDB2315678afecb367f032d93F642f64180aa3).

## Contributing

We welcome contributions to the EBC project. Please open an issue or submit a pull request on our [GitHub repository](https://github.com/azizmobarak/energy-backed-coin).

## License

Energy Backed Coin is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact us at [mobarakaziz9@gmail.com].