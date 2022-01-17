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
    <div className="text-white text-center font-semibold m-3 p-3">

      <div>
        <h1 className="p-3 text-3xl">My Native Balance
        </h1>

        <div className="p-3">
          {balance.formatted}
        </div>
      </div>
    </div>
  )
}

export default Balances
