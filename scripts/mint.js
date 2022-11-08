// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach("0x27Db926Df0ab2748D33347e442c1ef30894DBC8d"); // smart contract adress 

  await tiketEvent.mintNFT("0xEE2ec293c763b93e17eb1EBE2D8002198d1292f1", "https://gateway.pinata.cloud/ipfs/QmdPvnvBGfpCk6TeKo7w1oZMBm18PQb7hK1Ag1XWmJmfTB"); // adress de mon wallet 
  // url du metadata apres upload  sur pinata

  console.log(
    ` deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});