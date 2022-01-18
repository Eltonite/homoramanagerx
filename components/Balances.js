import { useMoralisWeb3Api, useNativeBalance } from "react-moralis"


function Balances() {

  const Web3api = useMoralisWeb3Api();
  const txns = Web3api.account.getTransactions({chain: "avalanche"});

  // const txnsArray = [];
  // txns.then((moralisObject) => {
  //   console.log(moralisObject.result)
  //   moralisObject.result.forEach((element) => {
  //     txnsArray.push(element.block_number)
  //   txnsArray.push(moralisObject.result);
  // })
  // console.log(txnsArray)

  // const someBalance = Web3api.account.getNativeBalance({chain: "avalanche"});

  // someBalance.then(bal => {
  //   console.log(bal.balance)
  // })

  const { data: balance } = useNativeBalance();

  return (
    <div className="rounded-xl border-2 px-3">
      {balance.formatted}
    </div>
  )
}

export default Balances
