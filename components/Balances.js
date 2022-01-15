import { useNativeBalance } from "react-moralis"


function Balances() {

  const { data: balance } = useNativeBalance();

  return (
    <div className="text-white text-center font-semibold m-3 p-3">
      <h1 className="p-3 text-3xl">My Native Balance</h1>
      <div className="p-3">
        {balance.formatted}
      </div>
    </div>
  )
}

export default Balances
