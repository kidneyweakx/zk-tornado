import "hardhat-circom"
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/types";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.7.3",
      },
    ],
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "https://hermezptau.blob.core.windows.net/ptau/powersOfTau28_hez_final_16.ptau",
    circuits: [
      {
        name: "withdraw",
        protocol: "plonk",
      },
    ],
  },
};

export default config;
