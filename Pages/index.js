import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
//INTERNAL IMPORT

const Home = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/Zmnv0a_jgcj3GNnV3uAY8vmcPd8VoTFh"
  );

  // console.log("provider", provider);
  const poolAddress = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8";
  const poolImmutablesAbi = [
    "function factory() external view returns (address)",
    "function token0() external view returnss (address)",
    "function token1() external view returns (address)",
    "function fee() external view returnss (uint24)",
    "function tickSpacing() external view returns (int24)",
    "function maxLiquidityPerTick() external view returns (uint24)",
  ];

  const poolContract = new ethers.contract();
  return <div>Heloo</div>;
};

export default Home;
