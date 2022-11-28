// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fsPromises = require('fs/promises')


const dir = 'scripts/metadatas'


const BASE_URL = "https://gateway.pinata.cloud/ipfs/QmaK7dSjjYMJjediLUJEU7jwnCkz5gKej1nFk8cJwg4WHe"
async function main() {

    
  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach("0x27Db926Df0ab2748D33347e442c1ef30894DBC8d"); // smart contract adress 

  // const listFilesAsync = async () => {
  //   try {
  //     // directory path
  //     const dir = 'scripts/metadatas'
  
  //     const files = await fsPromises.readdir(dir)
  
  //     // files object contains all files names
  //     // log them on console
  //     await (files.forEach(file => {
  //       console.log(file)
  //       console.log(`${BASE_URL}/${file}`)
  //       tiketEvent.mintNFT("0xEE2ec293c763b93e17eb1EBE2D8002198d1292f1",`${BASE_URL}/${file}`); // adress de mon wallet 
  //       // // url du metadata.json apres upload  sur pinata
      
  //     }))
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  await tiketEvent.mintNFT("0xEE2ec293c763b93e17eb1EBE2D8002198d1292f1", "https://gateway.pinata.cloud/ipfs/QmaK7dSjjYMJjediLUJEU7jwnCkz5gKej1nFk8cJwg4WHe/metadata_dodo.json"); // adress de mon wallet 
  // url du metadata.json apres upload  sur pinata

  console.log(
    ` deployed to https://testnets.opensea.io/assets/mumbai/${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});