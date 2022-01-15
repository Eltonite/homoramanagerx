import { useMoralis } from "react-moralis"

function Welcome() {

  const { authenticate } = useMoralis(); 

  return (
    <div className="flex flex-col h-screen justify-center lg:mx-80">
      <h1 className="text-white text-center font-bold text-4xl m-3 p-3 ">WELCOME TO ALPHA MANAGER-X</h1>

      <h3 className="text-white text-center font-semibold m-3 p-3">The World's First Automated Leverage Manager for Alpha Finance's Homora V2</h3>

      <button className="text-gray-300 border-gray-300 hover:text-black hover:border-black hover:bg-gray-300 rounded-xl border-2 text-center p-2 mx-48"
      onClick={authenticate}
      >Enter Dapp</button>
    </div>
  )
}

export default Welcome