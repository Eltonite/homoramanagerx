import Image from "next/image"
import wallpaper from "/images/backgroundragna.png"
import ragna from "/images/chibi-ragna.png"
import { useMoralis } from 'react-moralis'
 

function Login() {

  const { authenticate } = useMoralis()


  return (
    <div className="bg-gradient-to-b from-gray-900
     to-blue-900 text-white relative">

      <div className="flex flex-col absolute z-50 w-full items-center justify-center h-4/6 gap-4">
        <Image src={ragna} height={200} width={200}/>

        <button className="bg-blue-500 rounded-lg p-4 font-bold animate-bounce" onClick={authenticate}>LOGIN</button>
      </div>

      <div className="w-full h-screen opacity-20">
        <Image 
          src={wallpaper} 
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login