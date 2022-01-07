import Head from 'next/head'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import Headerhome from '../components/Headerhome'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()



  if (!isAuthenticated) return <Login />

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-gray-900
    to-blue-900 text-white relative'>
      <Head>
        <title>BBCF Basics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col max-w-screen-2xl mx-auto'>
        <Headerhome />
        <button className='justify-center' onClick={logout}>LOGOUT</button>
      </div>
      
    </div>
  )
}
