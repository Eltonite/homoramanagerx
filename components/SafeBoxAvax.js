import { useMoralisWeb3Api } from "react-moralis"
import {useEffect, useState} from "react"

function SafeBoxAvax() {

  const web3api = useMoralisWeb3Api();
  const [balance, setBalance] = useState(0);

  const ABI = [{
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }];
  
  const options = {
    chain: "avalanche",
    function_name: "balanceOf",
    address: "0x21C630B7824D15BcDFeefA73CBd4e49cAfe9F836",
    abi: ABI,
    params: {account: "0x03a3d0Eb17509dC9FB2a892ac1eAB68419DEb19B"}
  }

  useEffect(() => {
    const lendbal = web3api.native.runContractFunction(options).then(result => {
      setBalance(result)
    })
    
  },[])



  const ABI2 = [
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const options2 = {
    chain: "avalanche",
    function_name: "totalSupply",
    address: "0x21C630B7824D15BcDFeefA73CBd4e49cAfe9F836",
    abi: ABI2
  }
  // const fetchsupply = async() => {
  //   const result = await web3api.native.runContractFunction(options2);
  //   supply = result;
  // }

  const [supply, setSupply] = useState(0);

  useEffect(() => {
    const fetchsupply = web3api.native.runContractFunction(options2).then(result => {
      setSupply(result);
    })
    
  },[])
  

  return (
    <div className="text-center p-5">
      <div>{`My cToken balance: ${balance}`}</div>
      <div>{`Total cToken supply: ${supply}`}</div>
      <div>{`My position percentage: ${balance/supply*100}%`}</div>
    </div>
  )
}

export default SafeBoxAvax
