import {Addresses} from '@/shared/addresses'
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { writeContract, prepareWriteContract } from 'wagmi/actions';
export const executeTransaction = async (proof: any, publicSingals: Array<string>): Promise<TransactionReceipt> => {
    const abiPath = require('./abi/SimpleMultiplier.json');

    const config = await prepareWriteContract({
        address: Addresses.SIMPLE_MULTIPLIER_ADDR,
        abi: abiPath.abi,
        functionName: 'submitProof',
        args: [proof, publicSingals],
    });

    const writeResult = await writeContract(config);

    const txResult = await writeResult.wait();
    return txResult;
}