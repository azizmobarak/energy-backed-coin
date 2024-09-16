const { ethers } = require("hardhat");

async function main() {
  // Get the list of signers (accounts)
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the deployer's balance and print it out
  const deployerBalance = await deployer.getBalance();
  console.log("Account balance:", deployerBalance.toString());

  // Replace 'YourContractName' with the name of your smart contract
  const ContractFactory = await ethers.getContractFactory("EnergyBackedCoin");

  // Deploy the contract, passing constructor arguments and setting gas settings
  const contract = await ContractFactory.deploy("InitialName", 1000, {
    gasLimit: 3000000, // Adjust gas limit
    gasPrice: ethers.utils.parseUnits("10", "gwei"), // Set gas price
  });

  console.log("Contract deployed to address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
