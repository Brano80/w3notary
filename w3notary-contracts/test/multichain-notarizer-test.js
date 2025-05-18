const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiChainNotarizer", function () {
  let owner, addr1, notarizer;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const Notarizer = await ethers.getContractFactory("MultiChainNotarizer");
    notarizer = await Notarizer.deploy(owner.address);
  });

  it("Owner can notarize a document", async function () {
    const docHash = ethers.encodeBytes32String("doc1");
    await expect(notarizer.notarize(docHash))
      .to.emit(notarizer, "DocumentNotarized");
    const timestamp = await notarizer.getTimestamp(docHash);
    expect(timestamp).to.be.gt(0);
  });

  it("Non-owner cannot notarize", async function () {
    const docHash = ethers.encodeBytes32String("doc2");
    await expect(
      notarizer.connect(addr1).notarize(docHash)
    ).to.be.revertedWithCustomError(notarizer, "OwnableUnauthorizedAccount");
  });

  it("Cannot notarize the same hash twice", async function () {
    const docHash = ethers.encodeBytes32String("doc3");
    await notarizer.notarize(docHash);
    await expect(notarizer.notarize(docHash)).to.be.revertedWith("Already notarized");
  });
});

