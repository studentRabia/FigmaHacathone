import React from 'react'
import { GiSofa } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaPalfed } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import Footerlo from "../../../public/images/Footerlo.png"


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className=" flex items-center gap-1 text-2xl title-font font-semibold text-gray-900 tracking-widest mb-3">
        <GiSofa className="text-[#029FAE] size-10 w-9 " />Comforty
        </h2>
        <nav className="list-none mb-10">
         <li>
            <h3>Vivamus tristique odio sit amet velit semper,<br /> eu posuere turpis interdum. <br />
            Cras egestas purus </h3>
         </li>
          
         <div className='flex items-center  gap-3'>
         <div className='flex items-center justify-center rounded-full h-14 w-14  border-2 border-[#029FAE] '>
         <FaFacebook  className='bg-[#029FAE] size-7 rounded-full' />
          </div>
          <FaTwitter className=' size-5'/>
          <CiInstagram  className=' size-5'/>
          <FaPalfed className=' size-5'/>
          <FaYoutube className=' size-5'/>
         </div>
         
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sofa</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Armchair</a>
          </li>
          <li>
            <a className="text-[#029FAE] hover:text-gray-800 underline underline-offset-2">Desk Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">wooden Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Support
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help & Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Tearms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
        Newsletter
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
           
            </label>
            <input placeholder='  Your email'
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Bitters chicharrones fanny pack
          <br className="lg:block hidden" />
          waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        @ 2021 - Blogy - Designed & Develop by Zakirsoft
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       <Image src={Footerlo} alt='footer pic' width={227} height={27} />

        
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
