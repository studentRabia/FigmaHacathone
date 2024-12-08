import Image from 'next/image'
import React from 'react'
import WingCha from "../../../public/images/WheelCh.png"
import Stool from "../../../public/images/Stool.png"
import Moving from "../../../public/images/Moving.png"

import { CiShoppingCart } from "react-icons/ci";
const TopCategories = () => {
  return (
    <div>
   <section className="text-gray-600 body-font  mx-auto max-w-[1200px] ">
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/4 sm:w-1/2 p-4 gap-3">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={WingCha}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        <div className='px-2 bg-[#404040] h-[65px] w-[265px] rounded-br-2xl rounded-bl-2xl text-white' >
       <button>Wing Chair</button>
       <p className='text-[12px] text-gray-200'>3,584 Products</p>
       </div>
      </div>

      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Stool}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        <div className='px-2 bg-[#404040] h-[65px] w-[265px] rounded-br-2xl rounded-bl-2xl text-white' >
       <button>Wing Chair</button>
       <p className='text-[12px] text-gray-200'>3,584 Products</p>
       </div>
      </div>

      <div className="lg:w-1/4 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={Moving}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Catalyzer
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
        <div className='px-2 bg-[#404040] h-[65px] w-[265px] rounded-br-2xl rounded-bl-2xl text-white' >
       <button>Wing Chair</button>
       <p className='text-[12px] text-gray-200'>3,584 Products</p>
       </div>
      </div>


      
   
    </div>
  </div>
</section>


    </div>
  )
}

export default TopCategories
