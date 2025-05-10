const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Notary", function () {
  let notary, owner, other;
  let ownerAddress, otherAddress;
  const ZERO_HASH =
    "0x0000000000000000000000000000000000000000000000000000000000000000";

  beforeEach(async function () {
    // Get signers and their addresses
    [owner, other] = await ethers.getSigners();
    ownerAddress = await owner.getAddress();
    otherAddress = await other.getAddress();

    // Deploy Notary
    const NotaryFactory = await ethers.getContractFactory("Notary");
    notary = await NotaryFactory.deploy();
    await notary.waitForDeployment();
  });

  it("should record a new hash and emit DocumentNotarized", async function () {
    const docHash = ethers.keccak256(ethers.toUtf8Bytes("my-doc"));
    const tx = await notary.connect(other).recordHash(docHash);

    await expect(tx)
      .to.emit(notary, "DocumentNotarized")
      .withArgs(
        docHash,
        await getBlockTimestamp(tx.blockNumber),
        otherAddress
      );

    const ts = await notary.getTimestamp(docHash);
    expect(ts).to.be.gt(0);
    expect(ts).to.equal(await getBlockTimestamp(tx.blockNumber));
  });

  it("should revert when recording the zero hash", async function () {
    await expect(notary.recordHash(ZERO_HASH)).to.be.revertedWith(
      "Notary: invalid hash"
    );
  });

  it("should revert when re-recording the same hash", async function () {
    const docHash = ethers.keccak256(ethers.toUtf8Bytes("repeat-doc"));
    await notary.recordHash(docHash);
    await expect(notary.recordHash(docHash)).to.be.revertedWith(
      "Notary: already recorded"
    );
  });

  it("should revert when getting timestamp for zero hash", async function () {
    await expect(notary.getTimestamp(ZERO_HASH)).to.be.revertedWith(
      "Notary: invalid hash"
    );
  });

  it("should revert when getting timestamp for unknown hash", async function () {
    const unknown = ethers.keccak256(ethers.toUtf8Bytes("unknown"));
    await expect(notary.getTimestamp(unknown)).to.be.revertedWith(
      "Notary: hash not found"
    );
  });

  // helper to pull block timestamp
  async function getBlockTimestamp(blockNumber) {
    const block = await ethers.provider.getBlock(blockNumber);
    return block.timestamp;
  }
});

