//ethers.js comes with hardhat
//import ethers 

const {ethers} = require("hardhat")

async function main(){
//tell the script we want to deploy NFTea.sol contract
const contract = await ethers.getContractFactory('NFTea');
//deploy it
const deployedContract = await contract.deploy();
//wait for the contract to finish deploying
await deployedContract.deployed();
//print the address of the deployed contract
console.log(deployedContract.address)


}

main().catch((error)=>{
  console.log(error);
  process.exit(1); 
})