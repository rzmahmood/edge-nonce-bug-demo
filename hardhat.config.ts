import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    zkevm: {
      url: process.env.ZKEVM_RPC_URL || '',
      accounts: [process.env.PRIVATE_KEY || '']
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || '',
      accounts: [process.env.PRIVATE_KEY || '']
    }
  },
};

export default config;
