import Image from "next/image"
import bbcf from "/images/bbcf.png"

function Headerhome() {
  return (
    <div className="relative p-2 m-2 h-14 w-full justify-center grid grid-cols-5 lg:grid-cols-6 rounded-md bg-gradient-to-b from-gray-900 to-blue-900">
      <Image className="object-scale-down" src={bbcf} />
      <h1 className="col-span-3 lg:col-span-4 text-center">WELCOME HOME</h1>
      <Image className="object-scale-down" src={bbcf} />
    </div>
  )
}

export default Headerhome
