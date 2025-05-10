// scripts/deploy-notary.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", await deployer.getAddress());
  
    const Notary = await ethers.getContractFactory("Notary");
    const notary = await Notary.deploy();
    await notary.waitForDeployment();
  
    console.log("Notary deployed to:", notary.target);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  