import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main(hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, getUnnamedAccounts } = hre;
 
    const unnamedAccounts = await getUnnamedAccounts();
    
    const deployer = unnamedAccounts[0];

    const weth = await deployments.deploy('EVoting', {
        contract: 'EVoting',
        from: deployer,
        args: [],
        log: true,
        skipIfAlreadyDeployed: true,
    });
}

export default main;