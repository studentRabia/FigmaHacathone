import Image from 'next/image'
import React from 'react'
import Zapier from "../../../public/images/Zapier.png"
import Pipedrive from "../../../public/images/Pipedrive.png"
import Banck from "../../../public/images/Banck.png"
import Seven from "../../../public/images/Seven.png"
import Burnt from "../../../public/images/Burnt.png"
import Pd from "../../../public/images/Pd.png"
import Moz from "../../../public/images/Moz.png"
const Logos = () => {
  return (
    <div>
        <section className=" text-gray-600 body-font  mx-auto max-w-[1200px] ">
  <div className="container  py-32 mx-auto h-[3rem] w-full">
  
    <div className="flex flex-wrap m-2 gap-24 text-center    ">
      
        <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-16' src={Zapier} alt='pic' height={30} width={30}/>
      </div>

      
      
        <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-20' src={Pipedrive} alt='pic' height={30} width={30}/>
      </div>
      <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-20' src={Banck} alt='pic' height={30} width={30}/>
      </div>
      <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-20' src={Seven} alt='pic' height={30} width={30}/>
      </div>
      <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-24' src={Burnt} alt='pic' height={30} width={30}/>
      </div>
      <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-24' src={Pd} alt='pic' height={30} width={30}/>
      </div>
      <div className=" h-15 w-15 items-center justify-center flex border-gray-200 px-4 py-5  rounded-lg">
        <Image className='size-24' src={Moz} alt='pic' height={30} width={30}/>
      </div>

      
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Logos
