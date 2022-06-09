async function main() {
    const O_NFT = await ethers.getContractFactory("M_NFT");
    const M_NFT = await O_NFT.deploy();
    await M_NFT.deployed();
    console.log("Contract deployed to address:", M_NFT.address);
}

main().then(() => process.exit(0)).catch((error) => {
        console.error(error)
        process.exit(1)
    })