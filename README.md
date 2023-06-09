# Bug Demo:
export your own Sepolia RPC url, zkevm RPC url and private key based on the hardhat config file

`npx hardhat run scripts/deploy.ts --network sepolia` - This passes
`npx hardhat run scripts/deploy.ts --network zkevm` - Hangs at `const lock2 = await Lock.deploy(unlockTime, { value: lockedAmount });` 4/5 times. 1/5 times it logs `ProviderError: already known` 

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
