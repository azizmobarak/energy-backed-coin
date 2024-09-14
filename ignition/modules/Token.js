const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("EnergyBackedCoinModule", (m) => {
  const token = m.contract("EnergyBackedCoin");

  return { token };
});

module.exports = TokenModule;
