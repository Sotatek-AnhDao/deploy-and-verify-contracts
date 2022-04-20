const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.attach("");

  await greeter.deployed();

  await hre.run("verify:verify", {
      address: greeter.address,
      constructorArguments: ["Hello"]
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
