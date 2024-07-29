async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    
    const IPFSStorage = await ethers.getContractFactory("IPFSStorage");
    const ipfsStorage = await IPFSStorage.deploy();
    
    console.log("IPFSStorage deployed to:", ipfsStorage.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  