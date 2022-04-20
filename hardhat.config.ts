import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  networks: {
    hardhat: {
      
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY as string]
    }
  },
  verify: {
    etherscan: {
      apiKey: process.env.API_KEY
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};

export default config;