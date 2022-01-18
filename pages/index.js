import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Welcome from './Welcome'
import Balances from '../components/Balances'
import Transactions from '../components/Transactions'
import Navbar from '../components/Navbar'
import SafeBoxAvax from '../components/SafeBoxAvax'

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
    <div className='bg-gradient-to-r from-red-400 to-blue-900 h-full w-full'>
      <Head>
        <title>Manager X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col h-screen text-white my-6">

        <Transactions />

        <SafeBoxAvax />

      </div>
    </div>
  )
}
