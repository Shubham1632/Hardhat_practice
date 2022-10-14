require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");
/** @type import('hardhat/config').HardhatUserConfig */

const rpcurl = process.env.goerli_api_key || "https://eth-goerli.g.alchemy.com";
const private_key = process.env.private_key || "key";
const coinmarket_api_key = process.env.coinmarketcap_api_key || "key";

module.exports = {
  solidity: "0.8.8",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: rpcurl,
      accounts: [private_key],
      chainId: 5,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "INR",
    coinmarketcap: coinmarket_api_key,
    token: "MATIC",
  },
};
