const { task } = require("hardhat/config");

task("block-number", "prints the block number").setAction(
  async (taskArgs, hre) => {
    const blocknumber = await hre.ethers.provider.getBlockNumber();
    console.log(`The current block number is ${blocknumber}`);
  }
);

module.exports = {};
