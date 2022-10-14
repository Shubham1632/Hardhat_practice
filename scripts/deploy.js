const { ethers } = require("hardhat");
require("dotenv");
const apikey = process.env.goerli_api_key;

async function main() {
  const ssfactory = await ethers.getContractFactory("SimpleStoarage");
  console.log("Ruk... deploying contract");
  const deployedss = await ssfactory.deploy();
  await deployedss.deployed();
  console.log(deployedss.address);

  const currfav = await deployedss.retrive();
  console.log(`current favorite value is: ${currfav}`);
  const transactionresponce = await deployedss.store(7);
  await transactionresponce.wait(1);
  const newfav = await deployedss.retrive();
  console.log(`the new favorite number is ${newfav}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
