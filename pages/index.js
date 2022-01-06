import Head from 'next/head'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()



  if (!isAuthenticated) return <Login />

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>WELCOME TO THE DAPP</h1>

      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}
