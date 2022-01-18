import { useMoralis } from 'react-moralis'
import Balances from './Balances'

function Navbar() {

  const { logout } = useMoralis()

  return (
    <div className="flex flex-row-reverse w-full h-12 p-2 gap-2 text-gray-300">

      <button className="border-gray-300 hover:text-black hover:border-black hover:bg-gray-300 rounded-xl border-2 px-3" onClick={logout}>LOGOUT</button>

      <Balances />
    </div>
  )
}

export default Navbar
