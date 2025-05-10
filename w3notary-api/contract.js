// w3notary-api/contract.js
const { providers, Wallet, Contract } = require("ethers");
require("dotenv").config();

const rpcUrl = process.env.RPC_URL || "http://127.0.0.1:8545";
const provider = new providers.JsonRpcProvider(rpcUrl);

const privateKey =
  process.env.PRIVATE_KEY ||
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const wallet = new Wallet(privateKey, provider);

const NotaryArtifact = require("../w3notary-contracts/artifacts/contracts/Notary.sol/Notary.json");
const notaryAddress = process.env.NOTARY_ADDRESS || "0x5FbDB2315678afecb367f032d93F642f64180aa3";

module.exports = new Contract(notaryAddress, NotaryArtifact.abi, wallet);


