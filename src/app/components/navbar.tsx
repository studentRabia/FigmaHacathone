import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import { PiWarningCircle } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className=" h-[3rem] w-full bg-[#272343] text-white flex flex-col md:flex-row justify-center md:justify-between items-center px-80">
      <div className="flex items-center gap-2 text-sm">
        <FaCheck /> <span>Shipping on all orders over $50</span>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm">
        <select title="options" className="bg-[#272343] text-white border-none outline-none">
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
          <option value="arabic">Arabic</option>
          <option value="chines">Chinese</option>
          <option value="franch">French</option>
        </select>
        <div>Faqs</div>
        <div className="flex items-center gap-1">
          <PiWarningCircle /> Need Help
        </div>
      </div>
    </div>
  );
};

export const HeaderMid = () => {
  return (
    <div className=" h-[4rem] w-full bg-gray-100 flex flex-col sm:flex-row justify-between items-center px-80">
      {/* Left Section - Brand */}
      <div className="flex items-center gap-2 font-semibold text-xl">
        <GiSofa className="text-[#029FAE]" />
        Comforty
      </div>

      {/* Right Section - Cart */}
      <div className="mt-2 sm:mt-0">
        <button className="bg-white text-black font-semibold h-11 px-4 flex items-center gap-2 border border-gray-300 rounded-md hover:shadow-md">
          <FiShoppingCart />
          <span>Cart</span>
          <TbCircleNumber2Filled className="text-[#029FAE]" />
        </button>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="h-[4.5rem] w-full flex flex-wrap justify-between items-center border-b-2 px-80 text-[#272343]">
      {/* Left Section - Navigation Links */}
      <nav className="flex flex-wrap gap-6">
        <Link href="/" className="text-[#029FAE] hover:underline hover:underline-offset-4">
          Home
        </Link>
        <Link href="/" className="text-black hover:underline hover:underline-offset-4">
          Shop
        </Link>
        <Link href="/" className="text-black hover:underline hover:underline-offset-4">
          Product
        </Link>
        <Link href="/" className="text-black hover:underline hover:underline-offset-4">
          Pages
        </Link>
        <Link href="/" className="text-black hover:underline hover:underline-offset-4">
          About
        </Link>
      </nav>

      {/* Right Section - Contact Info */}
      <div className="mt-2 sm:mt-0 text-black text-sm">
        Contact: (808) 555-0111
      </div>
    </div>
  );
};

export default Navbar;
