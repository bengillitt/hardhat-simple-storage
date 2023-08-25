// imports
const { ethers } = require("hardhat");

// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
      "SimpleStorage"
    )
      console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment();
    const contractAddress = await simpleStorage.getAddress()
    console.log(`Deployed contract to: ${contractAddress}`);
}

async function verify(contractAddress, args) {
  
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
