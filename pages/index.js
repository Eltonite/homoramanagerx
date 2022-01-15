import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Welcome from './Welcome'
import Balances from '../components/Balances'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()


  if (!isAuthenticated) {
    return (
      <div className='bg-gradient-to-r from-red-400 to-blue-900'>
        <Welcome />
      </div>
    )
  }

  return (
    <div className='bg-gradient-to-r from-red-400 to-blue-900 h-screen'>
      <Head>
        <title>Manager X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="flex flex-col h-screen justify-center lg:mx-80">

        <Balances />

        <button className="text-gray-300 border-gray-300 hover:text-black hover:border-black hover:bg-gray-300 rounded-xl border-2 text-center p-2 mx-48" onClick={logout}>LOGOUT</button>

      </div>

      
      
    </div>
  )
}
