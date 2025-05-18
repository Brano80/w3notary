const hre = require("hardhat");

async function main() {

  // get network configuration
  const network = hre.network.name;

  // safety check to ensure we do not accidentally deploy to a production network
  const isTestnet = ['localhost', 'hardhat', 'rinkeby', 'kovan', 'mumbai'].includes(network);
  if (!isTestnet) {
    console.error("You're trying to deploy contracts to a non-Testnet network!");
    console.error("Check your settings.");
    return;
  }

  // get the deployer's account
  const [deployer] = await hre.ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // deploy MultiChainNotarizer
  const MultiChainNotarizer = await hre.ethers.getContractFactory("MultiChainNotarizer");
  const multichainNotarizer = await MultiChainNotarizer.deploy();
  await multichainNotarizer.deployed();

  console.log(`MultiChainNotarizer deployed to: ${multichainNotarizer.address}`);

  // deploy BitcoinAnchoring if needed
  const BitcoinAnchoring = await hre.ethers.getContractFactory("BitcoinAnchoring");
  const bitcoinAnchoring = await BitcoinAnchoring.deploy();
  await bitcoinAnchoring.deployed();

  console.log(`BitcoinAnchoring deployed to: ${bitcoinAnchoring.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });