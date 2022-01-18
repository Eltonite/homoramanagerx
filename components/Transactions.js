import { useMoralisWeb3Api } from "react-moralis"
import {useEffect, useState} from "react"

function Transactions() {
  const web3api = useMoralisWeb3Api();
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    const hashes = web3api.account.getTransactions({chain: "avalanche"}).then(result => {
      setBalance(result.result)
    })
    
  },[])
  const txns = [];
  balance.forEach(element => {
    txns.push(element.hash)
  });

  const [showTxns, setShowTxns] = useState(false);
  const [btnPhrase, setBtnPhrase] = useState("Show Transactions");

  function changeState() {
    if (showTxns) {
      setShowTxns(false);
      setBtnPhrase("Show Transactions")
    } else {
      setShowTxns(true);
      setBtnPhrase("Hide Transactions")
    }
  }


  return (
    <div className="text-center">
      <div>
        <h1 className="p-3 text-3xl text-white">
          My Transactions
        </h1>

        <div>
          <ul className="p-3">
            {txns.map((element) => {
              if (showTxns){
              return(
                <li className="p-3 m-3 rounded-lg bg-gray-400/30">
                  <a href={`https://snowtrace.io/tx/${element}`}>{element}</a>
                </li>
              )}
            })}
          </ul>
      </div>

        <button 
        className="text-gray-300 border-gray-300 hover:text-black hover:border-black hover:bg-gray-300 rounded-xl border-2 text-center p-3"
        onClick={() => {
            changeState();
          }}>
          {btnPhrase}
        </button>

      </div>

      

    </div>
  )
}

export default Transactions
