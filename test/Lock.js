const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("sstorage", async () => {
  let contractFactory, contract;
  beforeEach(async () => {
    contractFactory = await ethers.getContractFactory("SimpleStoarage");
    contract = await contractFactory.deploy();
  });

  it("should have favorite number as 0 by default", async () => {
    const currfav = await contract.retrive();
    const expectedfav = "0";
    assert.equal(currfav.toString(), expectedfav);
  });

  it("should update the value when we call store", async () => {
    const expected = "7";
    const transactionres = await contract.store(expected);
    await transactionres.wait(1);
    const currvlaue = await contract.retrive();
    assert.equal(expected, currvlaue);
  });
});
