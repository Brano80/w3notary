require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  // Support both 0.8.19 and 0.8.28 per-contract
  solidity: {
    compilers: [
      { version: "0.8.19" },
      { version: "0.8.28" }
    ]
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.GOERLI_RPC_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined
          ? [process.env.PRIVATE_KEY]
          : [],
    },
  },

  paths: {
    sources: "./contracts",   // where your .sol files live
    tests:   "./test",        // where your tests live
    cache:   "./cache",
    artifacts: "./artifacts",
  },
};
