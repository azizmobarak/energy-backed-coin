import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
//73d6e033a889432cb55954f44be91e8f
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");
const MAINNET_PRIVATE_KEY = vars.get("MAINNET_PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      gas: 3000000,
      gasPrice: 10,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`, // Mainnet Infura URL
      accounts: [MAINNET_PRIVATE_KEY], // Private key for your Mainnet account
      gas: 3000000, // Adjust as needed for your contract
      gasPrice: 30000000000, // 30 gwei (adjust depending on the current gas prices)
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
