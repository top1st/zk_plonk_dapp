# Summary
## Circuit

1. Write circom circuit

2. Compile the circuit:
```
circom circuit.circom --r1cs --wasm --sym
```

3. Download a powers of tau trusted setup file

4. Run Plonk setup to get the proving key:
```
snarkjs plonk setup circuit.r1cs ptau_file.ptau proving_key.zkey
```

## Contract

1. Export verifier smart contract
```
snarkjs zkey export solidityverifier proving_key.zkey verifier.sol
```

2. Integrate verifier into your Solidity project

## Frontend

1. Take user inputs
 
2. Calculate witness & generate proof in one step
```
await snarkjs.plonk.fullProve({ inputs }, wasmPath, provingKeyPath);
```

3. Submit transaction with proof to Verifier contract

